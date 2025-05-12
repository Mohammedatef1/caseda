"use client"

import { COLORS, MODELS } from '@/app/validators/option-validator';
import HandleComponent from '@/components/HandleComponent';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { useRef, useState } from 'react';
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
import { toast } from 'sonner';
import { useUploadThing } from '@/lib/uploadThing';

interface DesignConfiguratorProps {
  configId: string;
  imageDimensions: {width: number, height: number};
  imgUrl: string
}

const DesignConfigurator = ({configId, imageDimensions, imgUrl} : DesignConfiguratorProps) => {

  const {startUpload, isUploading} = useUploadThing("imageUploader")

  const containerRef = useRef<HTMLDivElement>(null)
  const caseRef = useRef<HTMLDivElement>(null)

  const [options, setOptions] = useState({
    color: COLORS.options[0],
    model: MODELS.options[0].value
  })
  const [renderedImagePosition, setRenderedImagePosition] = useState({
    x: 150,
    y: 150
  })

  const [renderedImageDimensions, setRenderedImageDimensions] = useState({
    width: imageDimensions.width,
    height: imageDimensions.height
  })

  const getCroppedImage = async() => {
    try {
      const containerRect = containerRef.current?.getBoundingClientRect()
      const caseRect = caseRef.current?.getBoundingClientRect()

      if (!caseRect || !containerRect) return

      const caseRelativeToContainer = {
        x: caseRect?.x - containerRect?.x,
        y : caseRect?.y - containerRect?.y 
      }

      const imageRelativeToCase = {
        x: renderedImagePosition.x - caseRelativeToContainer.x,
        y: renderedImagePosition.y - caseRelativeToContainer.y
      }
      
      const canvas = document.createElement('canvas');
      canvas.width = caseRect.width
      canvas.height = caseRect.height
      const ctx = canvas.getContext('2d')

      const userImage = new Image()
      userImage.crossOrigin = 'anonymous'
      userImage.src = imgUrl
      await new Promise(resolve => userImage.onload = resolve)

      ctx?.drawImage(
        userImage,
        imageRelativeToCase.x,
        imageRelativeToCase.y,
        renderedImageDimensions.width,
        renderedImageDimensions.height
      )

      const base64 = ctx?.canvas.toDataURL()
      const base64Data = base64?.split(',')[1]

      const blob = convert64ToBlob(base64Data!, 'image/png')
      const file = new File([blob], `case-${configId.slice(0, 4)}`, {type: 'image/png'} )

      await startUpload([file], {configId})
    } catch (error) {
      console.log(error)
      toast.error('something went wrong!')
    } 
  }

  const convert64ToBlob = (data: string, type: string) => {
    const byteCharacters = atob(data) // decode from 64 to characters
    const byteNumbs = [] 
    for(let i = 0; i < byteCharacters.length; i++ ) {
      byteNumbs[i] = byteCharacters.charCodeAt(i) // return the unicode of each character (0 : 255)
    }

    const byteArray = new Uint8Array(byteNumbs) // just convert the array to unit8array to be accepted by Blob
    const blob = new Blob([byteArray], { type })

    return blob
  }

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 overflow-hidden my-10">
      <div ref={containerRef} className="relative h-[37.5rem] md:col-span-2 border border-dashed border-gray-300 overflow-hidden rounded-2xl flex items-center justify-center p-4 md:p-6 ">
        <div  ref={caseRef} className="relative h-full max-h-full rounded-[45px]">
          <img src="/phone-template.png" alt="" className="w-full h-full object-contain relative z-50 pointer-events-none select-none" />
          <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)] pointer-events-none' />
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] pointer-events-none transition-colors',
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
        onDragStop={(_,{x, y}) => setRenderedImagePosition({x, y})}
        onResizeStop={(_, __, element, ___, {x, y}) => {
          setRenderedImagePosition({x, y})
          setRenderedImageDimensions({width : parseInt(element.style.width.slice(0, -2)), height: parseInt(element.style.height.slice(0, -2))})
        }}
        default={{ x:150,y: 150, width: imageDimensions.width, height: imageDimensions.height  }} lockAspectRatio 
        className='absolute z-20'
        resizeHandleComponent={{
          topLeft: <HandleComponent/>,
          topRight: <HandleComponent/>,
          bottomLeft: <HandleComponent/>,
          bottomRight: <HandleComponent/>
        }}>
          <NextImage fill src={imgUrl} alt='' className='select-none pointer-events-none' />
        </Rnd>
      </div>
      <div className="md:col-span-1 p-4 sm:p-6 h-[37.5rem] flex flex-col gap-y-5">
        <ScrollArea className='flex-1 overflow-auto'>
          <h3 className='font-bold text-2xl md:text-4xl mb-8'>Customize your case.</h3>
          <div className='flex flex-col gap-y-5'>
            <div>
              <span>{COLORS.label}: {options.color.label}</span>
              <RadioGroup className='flex items-center gap-x-2 flex-wrap mt-2'>
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
        <div className='flex items-center gap-x-2 md:gap-x-5'>
          <span>$14.00</span>
          <Button onClick={getCroppedImage} disabled={isUploading} className='flex-1 cursor-pointer disabled:opacity-75 transition-opacity'>
            <span>Continue</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DesignConfigurator