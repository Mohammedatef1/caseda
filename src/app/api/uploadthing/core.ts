import { db } from "@/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import z from 'zod'
import sharp from 'sharp'

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).input(z.object({configId: z.string().optional()}))
    .middleware(async ({input}) => {

      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const configId = metadata.input.configId
      
      const res = await fetch(file.ufsUrl)
      const buffer = await res.arrayBuffer()
      const imgMetadata = await sharp(buffer).metadata()
      const {width, height} = imgMetadata

      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imgUrl: file.ufsUrl,
            width: width || 500,
            height: height || 500,
          }
        })

        return {configId: configuration.id}

      }else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId
          },
          data: {
            croppedImageUrl: file.ufsUrl
          }
        })

        return{ configId: updatedConfiguration.id}
      }

    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
