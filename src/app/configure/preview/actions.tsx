"use server"

import { BASE_PRICE } from "@/app/config/products"
import { FINISH, MATERIAL, MODELS } from "@/app/validators/option-validator"
import { db } from "@/db"
import { Configuration, Order } from "@/generated/prisma"
import { stripe } from "@/lib/stripe"

export const createCheckoutSession = async ({configuration} : {configuration : Configuration}) => {

  if(!configuration) throw new Error('there is no configuration')

  const finishPrice = FINISH.options.find(item => item.value === configuration.finish)?.price || 0
  const materialPrice = MATERIAL.options.find(item => item.value === configuration.material)?.price || 0
  const modelLabel = MODELS.options.find(item => item.value === configuration.model)?.label

  let price = BASE_PRICE
  price += (finishPrice + materialPrice)

  let order : Order | undefined = undefined

  const existingOrder = await db.order.findFirst({
    where: {
      configurationId: configuration.id
    }
  })

  if(existingOrder) {
    order = existingOrder
  } else {
    order = await db.order.create({
      data: {
        configurationId: configuration.id,
        amount: price
      }
    })
  }

  const product = await stripe.products.create({
    name: `${modelLabel} case`,
    images: [configuration.imgUrl],
    default_price_data: {
      currency: 'USD',
      unit_amount: price * 100
    }
  })

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.BASE_APP_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.BASE_APP_URL}/configure/preview?id=${configuration.id}`,
    payment_method_types: ['card'],
    shipping_address_collection: {allowed_countries: ['UG', 'EG']},
    line_items: [{price: product.default_price as string, quantity: 1}],
    mode: 'payment',
    metadata: {
      orderId: order.id
    }
  })

  return { url: stripeSession.url}
}