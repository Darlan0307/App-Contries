import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AppHeader from './AppHeader'
import Home from './pages/Home'


const AppRouters = () => {
  return (
    <BrowserRouter>

      <AppHeader/>
      
      <Routes>

        <Route index element={<Home/>}/>

      </Routes>


      {/* Rodape */}
    </BrowserRouter>
  )
}

export default AppRouters