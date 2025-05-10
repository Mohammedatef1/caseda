import { db } from "@/db"
import { SearchParams } from "next/dist/server/request/search-params"
import { notFound } from "next/navigation"
import DesignConfigurator from "./DesignConfigurator"

interface PageProps {
  searchParams: SearchParams
}

const page = async({searchParams} : PageProps) => {
  const {id} = await searchParams

  if (!id || typeof id !== "string") return notFound()

  const configuration = await db.configuration.findUnique({
    where: {
      id: id
    }
  })

  if (!configuration) return notFound()

  const {imgUrl, id: configId, height, width} = configuration

  return (
    <DesignConfigurator configId={configId} imgUrl={imgUrl} imageDimensions={{width, height}} /> 

  )
}

export default page