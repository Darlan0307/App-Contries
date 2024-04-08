
import { FaSearch } from 'react-icons/fa'
import { Input } from '../ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SectionFilter = () => {
  return (
    <section className='mt-8 flex flex-col items-center justify-between gap-6  px-10 sm:px-20 sm:flex-row '>
      <div className='flex w-[100%] max-w-[400px] relative'>
        <FaSearch className='absolute top-[25%] left-3'/>
        <Input className='pl-10 w-full bg-slate-100 dark:bg-slate-900' placeholder='Search for a country' type='text' />
      </div>

        <Select>
          <SelectTrigger className="w-[200px] bg-slate-100 dark:bg-slate-900">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className='w-[200px] bg-slate-100  dark:bg-slate-900'>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="america">America</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
    </section>
  )
}

export default SectionFilter