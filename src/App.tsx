import AppRouters from "./components/AppRouters"
import { ThemeProvider } from "./context/ThemeProviderContext"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <>
          <ToastContainer autoClose={3000} position={"bottom-left"}/>
          <AppRouters/> 
        </>
      </ThemeProvider>
    </>
  )
}

export default App
