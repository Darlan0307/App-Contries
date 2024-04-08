import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps{
  nextPage:()=>void,
  prevPage:()=>void
}

const ComponentPagination = ({nextPage,prevPage}:PaginationProps) => {
  return (
    <Pagination className="my-10">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={prevPage}/>
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationNext onClick={nextPage}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ComponentPagination