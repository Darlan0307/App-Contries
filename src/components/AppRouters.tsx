import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AppHeader from './AppHeader'


const AppRouters = () => {
  return (
    <BrowserRouter>

      <AppHeader/>
      
      <Routes>

        <Route index element={<h1>Home</h1>}/>

      </Routes>


      {/* Rodape */}
    </BrowserRouter>
  )
}

export default AppRouters