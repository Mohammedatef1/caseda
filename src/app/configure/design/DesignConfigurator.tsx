"use client"

import { COLORS, MODELS } from '@/app/validators/option-validator';
import HandleComponent from '@/components/HandleComponent';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Rnd } from 'react-rnd'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

interface DesignConfiguratorProps {
  configId: string;
  imageDimensions: {width: number, height: number};
  imgUrl: string
}

const DesignConfigurator = ({configId, imageDimensions, imgUrl} : DesignConfiguratorProps) => {
  const [options, setOptions] = useState({
    color: COLORS.options[0],
    model: MODELS.options[0].value
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
      <div className="md:col-span-1 p-4 sm:p-6 h-[37.5rem] flex flex-col gap-y-5">
        <ScrollArea className='flex-1 overflow-auto'>
          <h3 className='font-bold text-2xl md:text-4xl mb-8'>Customize your case.</h3>
          <div className='flex flex-col gap-y-5'>
            <div>
              <span>{COLORS.label}: {options.color.label}</span>
              <RadioGroup onChange={(e) => console.log(e)}  className='flex items-center gap-x-2 flex-wrap mt-2'>
                {COLORS.options.map(item => (
                  <div className={`p-0.5 border rounded-full transition-colors ${options.color === item ? `border-${item.tw}` : 'border-transparent'}`} key={item.value}>
                    <RadioGroupItem value={item.value} id={`color-${item.value}`} className='hidden' />
                    <label onClick={() => {setOptions(prev => {
                      return {...prev, color: item}
                    })}} htmlFor={`color-${item.value}`} className={`w-8 h-8 rounded-full cursor-pointer block bg-${item.tw}`} ></label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <span>{MODELS.label}</span>
              <Select onValueChange={(value) => {
                setOptions(prev => {
                  return {...prev, model: value}
                })
              }}>
                <SelectTrigger className="w-full focus-visible:outline-none focus-visible:ring-0 mt-2 ring-0">
                  <SelectValue placeholder={MODELS.options[0]?.label} />
                </SelectTrigger>
                <SelectContent>
                  {MODELS.options.map(item => (
                    <SelectItem key={item.label} value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </ScrollArea>
        <div className='flex items-center gap-x-2 md:gap-x-5 cursor-pointer'>
          <span>$14.00</span>
          <Button className='flex-1'>
            <span>Continue</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DesignConfigurator