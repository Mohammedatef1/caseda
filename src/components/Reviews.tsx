"use client"

import MaxWidthWrapper from "./MaxWidthWrapper"
import Phone from "./Phone"
import { HTMLAttributes, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"

const PHONES = [
  '/testimonials/1.jpg',
  '/testimonials/2.jpg',
  '/testimonials/3.jpg',
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
]

const splitArray = <T,>(array: T[], numParts: number) => {
  const result: Array<Array<T>> = []

  for( let i = 0; i< array.length; i++){
    const index = i % numParts
    if(!result[index]){
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Review = ({imgSrc, className, ...props} : ReviewProps) => {

  const AVAILABLE_DELAYS = [
    '0s',
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
  ]

  const animationDelay = AVAILABLE_DELAYS[Math.floor(Math.random() * AVAILABLE_DELAYS.length)]
  console.log(Math.floor(Math.random() * AVAILABLE_DELAYS.length))

  return(
    <div className={cn("animate-fade-in opacity-0 bg-white rounded-[2.25rem] p-6 mb-5 shadow-xl shadow-slate-900/5", className )} style={{animationDelay}} {...props}>
      <Phone imgSrc={imgSrc} />
    </div>
  )
}

const ReviewColumn = (
  {
    reviews,
    className,
    msPerColumn = 0,
    reviewClassName
  } : {
    reviews: string[];
    className?: string;
    reviewClassName?: (index: number) => string;
    msPerColumn?: number;
  }
) => {

  const columnRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)
  const duration = `${height * msPerColumn}ms`

  useEffect(() => { 
    if (!columnRef.current) return

    const resizeObserver = new window.ResizeObserver(() => {
      setHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return() => {
      resizeObserver.disconnect()
    }
  }, [])


  return(
    <div ref={columnRef} className={cn("animate-marquee space-y-8", className)} style={{'--animation-duration': duration} as React.CSSProperties}>
      {reviews.concat(reviews).map((imgSrc, index) => (
        <Review imgSrc={imgSrc} key={index} className={reviewClassName?.(index % reviews.length)} />
      ))}
    </div>
  )
} 

const ReviewsGrid = () => {
  const columns = splitArray(PHONES, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3= columns[2]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return(
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 -mx-4 mt-16 sm:mt-20 h-[49rem] max-h-[150vh] overflow-hidden">
      {isInView && (<>
        <ReviewColumn reviews={column1} msPerColumn={10}/>
        <ReviewColumn reviews={column2} msPerColumn={12} className="hidden md:block"/>
        <ReviewColumn reviews={column3} msPerColumn={10} className="hidden md:block"/>
      </>)}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100' />
    </div>
  )
}


const Reviews = () => {
  return (
    <MaxWidthWrapper className="h-auto relative px-2.5 md:px-20 max-w-5xl mx-auto">
      <div className="absolute top-1/3 left-16 hidden xl:block -translate-x-full">
        <img src="/what-people-are-buying.png" alt="" />
      </div>
      <ReviewsGrid/>
    </MaxWidthWrapper>
  )
}

export default Reviews