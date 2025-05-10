"use client"

import HandleComponent from '@/components/HandleComponent';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Rnd } from 'react-rnd'

interface DesignConfiguratorProps {
  configId: string;
  imageDimensions: {width: number, height: number};
  imgUrl: string
}

const DesignConfigurator = ({configId, imageDimensions, imgUrl} : DesignConfiguratorProps) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 overflow-hidden my-10">
      <div className="relative h-[37.5rem] md:col-span-2 border border-dashed border-gray-300 overflow-hidden rounded-2xl flex items-center justify-center p-4 md:p-6 ">
        <div className="relative h-full max-h-full rounded-[45px]">
          <img src="/phone-template.png" alt="" className="w-full h-full object-contain relative z-50 pointer-events-none select-none" />
          <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)] pointer-events-none' />
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] pointer-events-none',
              `bg-blue-500`
            )}
          />
        </div>
        <Rnd default={{ x:150,y: 150, width: imageDimensions.width, height: imageDimensions.height  }} lockAspectRatio 
        resizeHandleComponent={{
          topLeft: <HandleComponent/>,
          topRight: <HandleComponent/>,
          bottomLeft: <HandleComponent/>,
          bottomRight: <HandleComponent/>
        }}>
          <Image fill src={imgUrl} alt='' className='select-none pointer-events-none relative z-1' />
        </Rnd>
      </div>
      <div className="md:col-span-1"></div>
    </div>
  )
}

export default DesignConfigurator