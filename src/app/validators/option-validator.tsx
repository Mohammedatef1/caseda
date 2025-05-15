// bg-blue-900 border-blue-900
// bg-red-900 border-red-900
// bg-zinc-950 border-zinc-950

import { PRODUCT_PRICES } from "../config/products"

export const COLORS = {
  label: 'Color',
  options: [
    {
    label: 'Black',
    value: 'black',
    tw: 'zinc-950'
    },
    {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-900'
    },
    {
    label: 'Red',
    value: 'red',
    tw: 'red-900'
    }
  ] 
}

export const MODELS = {
  label: 'Models',
  options: [
    {
      label: "Iphone X",
      value: "iphonex"
    },
    {
      label: "Iphone 11",
      value: "iphone11"
    },
    {
      label: "Iphone 12",
      value: "iphone12"
    },
    {
      label: "Iphone 13",
      value: "iphone13"
    },
    {
      label: "Iphone 14",
      value: "iphone14"
    },
    {
      label: "Iphone 15",
      value: "iphone15"
    }
  ]
}

export const MATERIAL = {
  label: 'Material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      price: PRODUCT_PRICES.material.silicone,
      desc: ''
    },
    {
      label: 'Soft polycarbonate',
      value: 'polycarbonate',
      price: PRODUCT_PRICES.material.polycarbonate,
      desc: 'Scratch-resistant coating'
    },
  ]
}

export const FINISH = {
  label: 'Finish',
  options: [
    {
      label: 'Smooth finish',
      value: 'smooth',
      price: PRODUCT_PRICES.finish.smooth,
      desc: ''
    },
    {
      label: 'Textured finish',
      value: 'textured',
      price: PRODUCT_PRICES.finish.texture,
      desc: 'Soft grippy texture'
    },
  ]
}