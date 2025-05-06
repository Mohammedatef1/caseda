"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Progress } from '@/components/ui/progress'
import { Image, Loader2 } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import Dropzone from 'react-dropzone'

const page = () => {

  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [isPending, onTransition] = useTransition()

  const onDropAccepted = () => {
    console.log('accepted');
    setIsDragOver(false)
  }

  const onDropRejected = () => {
    console.log("rejected")
  }

  return ( 
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <div className={`relative h-full flex-1 my-16 w-full rounded-xl  p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center transition ${isDragOver? 'bg-gray-900/15' : 'bg-gray-900/5'}`}>
      <Dropzone accept={{
        'image/png': ['.png'],
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jpeg'],
      }} onDragEnter={() => setIsDragOver(true)} onDragLeave={() => setIsDragOver(false)} onDropAccepted={onDropAccepted} onDropRejected={onDropRejected}>
        {({getInputProps, getRootProps}) => (
          <div className='relative flex flex-1 flex-col items-center justify-center w-full' {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isUploading? 
              <>
                <Loader2 className='animate-spin'/>
                <p>uploading...</p>
                <Progress value={progressValue} />
              </> : isDragOver ? 
              <>
                <Image/>
                <p><span className='font-semibold'>drop file </span> to upload</p>
                <span>PNG, JPG, JPEG</span>
              </> :  
              <>          
                <Image/>
                <p><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                <span>PNG, JPG, JPEG</span>
              </>
            }
          </div>
        )}
      </Dropzone>
      </div>
    </MaxWidthWrapper>
  )
}

export default page