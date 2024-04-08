import AppRouters from "./components/AppRouters"
import { ThemeProvider } from "./context/ThemeProviderContext"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouters/> 
      </ThemeProvider>
    </>
  )
}

export default App
