"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from '@/lib/uploadThing'
import { Image, Loader2,  MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import Dropzone, {FileRejection} from 'react-dropzone'
import { toast } from 'sonner'

const Page = () => {

  const router = useRouter()

  const [isDragOver, setIsDragOver] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [isPending, startTransition] = useTransition()
  
  const {startUpload, isUploading} = useUploadThing("imageUploader" , {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress: (p) => {
      setProgressValue(p)
    }
  })

  const onDropAccepted = (acceptedFiles: File[]) => {
    setIsDragOver(false)
    if (acceptedFiles.length > 1 ) {
      toast.error("you can't upload multiple files.")
      return
    }else if (acceptedFiles[0].size > 4194304) {
      toast.error("file size can't exceeded 4MB.")
      return
    }
    startUpload(acceptedFiles, {configId: undefined})
  } 

  const onDropRejected = (fileRejection: FileRejection[] ) => {
    setIsDragOver(false)
    const [file] = fileRejection
    toast.error(`the file type ${file.file.type.split('/')[1]} is not supported`)
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
          <div className='relative flex flex-1 flex-col items-center justify-center w-full gap-y-2' {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isPending? <>
                <Loader2 className='animate-spin'/>
                <p>redirecting please wait...</p>
              </> :
              isUploading? 
              <>
                <Loader2 className='animate-spin'/>
                <p>uploading...</p>
                <Progress value={progressValue} className='w-52 bg-gray-300' />
              </> : isDragOver ? 
              <>
                <MousePointerSquareDashed />
                <p><span className='font-semibold'>drop file </span> to upload</p>
                <span>PNG, JPG, JPEG</span>
              </> :  
              <>          
                <Image />
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

export default Page