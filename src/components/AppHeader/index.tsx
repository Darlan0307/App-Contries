import ModeToggle from "../ModeToggle"


const AppHeader = () => {
  return (
    <header className="flex flex-wrap justify-center gap-4 items-center py-8 px-10 min-[380px]:justify-between sm:px-20">
      <h1 className="text-xl sm:text-3xl" >Where is the World?</h1>
      <ModeToggle/>
    </header>
  )
}

export default AppHeader