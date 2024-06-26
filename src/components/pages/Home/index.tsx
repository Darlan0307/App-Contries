import { TypeContry } from "@/@Types/TypeCoutry";
import ComponentPagination from "@/components/ComponentPagination";
import SectionFilter from "@/components/SectionFilter"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {

  const [dataCountries,setDataCountries] = useState<TypeContry[] | []>([])
  const [numberStart,setNumberStart] = useState(0)
  const [numberEnd,setNumberEnd] = useState(10)
  const [filterName,setFilterName] = useState('')
  const [filterRegion,setFilterRegion] = useState('')

  const navigate = useNavigate()
  
  const nextPage = () => {
    setNumberStart((prev) => prev + 10)
    setNumberEnd((prev) => prev + 10)
  }

  const prevPage = () => {

    if(numberStart == 0)return;

    setNumberStart((prev) => prev - 10)
    setNumberEnd((prev) => prev - 10)
  }

  const fetchData = async() => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      setDataCountries(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }

  const fetchFilterData = async(typeFilter:"name" | "region",value:string) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/${typeFilter}/${value}`)
      setDataCountries(response.data)
      
    } catch (error:any) {
      toast.warn(error?.response?.data?.message)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{

    if(filterName){
      fetchFilterData("name",filterName)
    } else if(filterRegion){
      fetchFilterData("region",filterRegion)
    }

    
  },[filterName,filterRegion])

  return (
    <main>
      <SectionFilter
        filterName={filterName}
        setFilterName={setFilterName}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      {dataCountries.length > 0 ? (
        <>
          <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
            {dataCountries.slice(numberStart,numberEnd).map((country)=>(
              <article key={country.cca2} className="flex flex-col w-full max-w-[250px] bg-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all dark:bg-slate-900"
              onClick={()=>{
                navigate(`/country/${country.name.common}`)
              }}
              >
                <img className="h-[150px]" src={country.flags.png} alt={country.name.official} />
                <h3 className="text-center py-4 text-2xl  overflow-x-auto">{country.name.common}</h3>
                <p className="px-4 text-sm mb-3"><span className=" pr-3 text-[18px]">Population:</span>{country.population}</p>
                <p className="px-4 text-sm mb-3"><span className=" pr-3 text-[18px]">Region:</span>{country.region}</p>
                <p className="px-4 text-sm mb-3"><span className=" pr-3 text-[18px]">Capital:</span>{country.capital}</p>
              </article>
            ))}
          </div>

          <ComponentPagination nextPage={nextPage} prevPage={prevPage} numberStart={numberStart}/>
        </>
      ):(
        <h2>carregando...</h2>
      )}
    </main>
  )
}

export default Home