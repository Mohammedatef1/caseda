"use client"

import { COLORS } from '@/app/validators/option-validator';
import HandleComponent from '@/components/HandleComponent';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Rnd } from 'react-rnd'

interface DesignConfiguratorProps {
  configId: string;
  imageDimensions: {width: number, height: number};
  imgUrl: string
}

const DesignConfigurator = ({configId, imageDimensions, imgUrl} : DesignConfiguratorProps) => {
  const [options, setOptions] = useState({
    color: COLORS[0]
  })

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 overflow-hidden my-10">
      <div className="relative h-[37.5rem] md:col-span-2 border border-dashed border-gray-300 overflow-hidden rounded-2xl flex items-center justify-center p-4 md:p-6 ">
        <div className="relative h-full max-h-full rounded-[45px]">
          <img src="/phone-template.png" alt="" className="w-full h-full object-contain relative z-50 pointer-events-none select-none" />
          <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)] pointer-events-none' />
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] pointer-events-none transition-colors',
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd default={{ x:150,y: 150, width: imageDimensions.width, height: imageDimensions.height  }} lockAspectRatio 
        className='absolute z-20'
        resizeHandleComponent={{
          topLeft: <HandleComponent/>,
          topRight: <HandleComponent/>,
          bottomLeft: <HandleComponent/>,
          bottomRight: <HandleComponent/>
        }}>
          <Image fill src={imgUrl} alt='' className='select-none pointer-events-none' />
        </Rnd>
      </div>
      <div className="md:col-span-1 p-4 sm:p-6 h-[37.5rem]">
        <h3 className='font-bold text-2xl md:text-4xl mb-8'>Customize your case.</h3>
        <ScrollArea className='flex-1 h-full'>
          <span>color: {options.color.label}</span>
          <RadioGroup onChange={(e) => console.log(e)}  className='flex items-center gap-x-2 flex-wrap mt-2'>
            {COLORS.map(item => (
              <div className={`p-0.5 border rounded-full transition-colors ${options.color === item ? `border-${item.tw}` : 'border-transparent'}`} key={item.value}>
                <RadioGroupItem value={item.value} id={`color-${item.value}`} className='hidden' />
                <label onClick={() => {setOptions(prev => {
                  return {...prev, color: item}
                })}} htmlFor={`color-${item.value}`} className={`w-8 h-8 rounded-full block bg-${item.tw}`} ></label>
              </div>
            ))}
          </RadioGroup>
        </ScrollArea>
      </div>
    </div>
  )
}

export default DesignConfigurator