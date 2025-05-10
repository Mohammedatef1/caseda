import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Pagination from "@/components/Pagination"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col" >
      <Pagination />
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout