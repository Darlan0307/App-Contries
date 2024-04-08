import { TypeContry } from "@/@Types/TypeCoutry"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { FaArrowLeft } from 'react-icons/fa'

const SingleCountry = () => {

  const {
    name
  } = useParams()

  const [data,setData] = useState<TypeContry | null>(null)

  const fetchData = async(name:string | undefined)=>{
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      setData(response.data[0])
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData(name)
  },[])

  const arrLanguages = Object.values(data?.languages || '')

  return (
    <main className="flex flex-col items-start gap-10 mt-10 px-5">

      <Link  className={buttonVariants({ variant: "outline" })} to="/">
       <FaArrowLeft /> <span className="pl-2">Back</span>
      </Link>

      {data ? (
        <div className="flex flex-col gap-6 w-full justify-center md:flex-row md:gap-10">
          <img className="w-[90%] max-w-[400px] mx-auto md:m-0" src={data.flags.png} alt={data.name.official} />
          <article className="flex  flex-col gap-6">
            <h2 className="text-3xl">{data.name.common}</h2>
            <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col gap-1">
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Official Name:</span> {data.name.official}</p>
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Population:</span> {data.population}</p>
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Region:</span> {data.region}</p>
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Sub Region:</span> {data.subregion}</p>
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Capital:</span> {data.capital}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Top Level Domain:</span> {data.tld}</p>
              <p className=" text-slate-600"><span className="text-xl pr-2 text-slate-900 dark:text-slate-50">Languages:</span> {arrLanguages.toString()}</p>
            </div>
            </div>

            {!!data.borders && (
              <div >
                <h3 className="text-2xl">Border Countries:</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {data.borders.map((border,index) => (
                    <p className={buttonVariants({ variant: "outline" })} key={index}>{border}</p>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      ):(
        <h2>Carregando...</h2>
      )}
    </main>
  )
}

export default SingleCountry