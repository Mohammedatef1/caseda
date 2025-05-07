import { SearchParams } from "next/dist/server/request/search-params"

interface PageProps {
  searchParams: SearchParams
}

const page = async({searchParams} : PageProps) => {
  const {id} = await searchParams

  return (
    <p>{id}</p>
  )
}

export default page