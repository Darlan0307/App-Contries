
import { FaSearch } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";
import { Input } from '../ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterProps{
  filterName:string
  setFilterName:(text:string)=>void
  filterRegion:string
  setFilterRegion:(value:string)=>void
}

const SectionFilter = ({filterName,setFilterName,filterRegion,setFilterRegion}:FilterProps) => {
  return (
    <section className='mt-8 flex flex-col items-center justify-between gap-6  px-10 sm:px-20 sm:flex-row '>
      <div className='flex w-[100%] max-w-[400px] relative'>
        <FaSearch className='absolute top-[25%] left-3'/>
        <Input 
        className='pl-10 w-full bg-slate-100 dark:bg-slate-900' placeholder='Search for a country'
        type='text'
        value={filterName}
        onChange={(e)=>setFilterName(e.target.value)}
        />
        {filterName.length > 0 && <IoClose className='absolute top-[20%] right-3 cursor-pointer text-xl z-10' onClick={()=>location.reload()}/>}
      </div>

        <Select value={filterRegion} onValueChange={(value)=> setFilterRegion(value)
        }>
          <SelectTrigger className="w-[200px] bg-slate-100 dark:bg-slate-900">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className='w-[200px] bg-slate-100  dark:bg-slate-900'>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="America">America</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
    </section>
  )
}

export default SectionFilter