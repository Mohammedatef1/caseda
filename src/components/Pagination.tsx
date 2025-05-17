"use client"

import React, { HTMLAttributes, useEffect, useState} from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const PAGES = [
  {
    label: 'Step 1: Add image',
    desc: 'Choose an image for your case',
    image: '/snake-1.png',
    pathName: '/configure/upload'
  },
  {
    label: 'Step 2: Customize design',
    desc: 'Make the case yours',
    image: '/snake-2.png',
    pathName: '/configure/design'
  },
  {
    label: 'Step 3: Summary',
    desc: 'Review your final design',
    image: '/snake-3.png',
    pathName: '/configure/preview'
  },
]

const Pagination = () => {
  const pathname = usePathname()
  const [mount, setMount] = useState(false)

  useEffect(() => { 
    setMount(true)
  }, [])

  // if(!mount) return null

  return (
      <div className="flex flex-col lg:flex-row lg:border-x border-gray-200">
        {PAGES.map((page, i) => {
          const isCurrent = pathname.endsWith(page.pathName) ;
          const isCompleted = PAGES.slice(1 + i).some(page => pathname.endsWith(page.pathName))
          
          return (
          <div className=' relative lg:flex-1 flex items-center gap-4 px-6 py-4 text-sm' key={page.label}>
            {mount && <span className={cn('absolute animate-fade-in bottom-0 left-0 lg:w-full lg:h-1 h-full w-1 bg-zinc-400', {
              'bg-primary': isCompleted  ,
              'bg-zinc-700' : isCurrent
            })}></span>}
            {i !== 0 && <Separator className='h-full w-3 absolute left-0 hidden lg:block' />}
            <div className='h-20 w-20'>
              <img src={page.image} alt="pagination image" className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col'>
              <span className={`font-semibold ${isCompleted ? 'text-primary' : 'text-zinc-700'}`}>{page.label}</span>
              <span className='text-zinc-500'>{page.desc}</span>
            </div>
          </div>)})}
      </div>
  )
}

export default Pagination

const Separator: React.FC<HTMLAttributes<HTMLOrSVGElement>> = ({className}) => {
    return (<svg className={cn("h-full w-full text-gray-300", className)} viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"><path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke"></path></svg>)
}