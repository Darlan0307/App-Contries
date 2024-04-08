import { FaGithub } from 'react-icons/fa'


const AppFooter = () => {
  return (
    <footer className="mt-20 p-4 bg-slate-100 shadow-md dark:bg-slate-900">
      <p className='flex justify-center text-xl'>developed by <a className=' pl-2 flex items-center gap-2' href="https://github.com/Darlan0307" target="_blank"><FaGithub/> <span className='text-[18px] underline'>Darlan0307</span></a></p>
    </footer>
  )
}

export default AppFooter