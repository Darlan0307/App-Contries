import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AppHeader from './AppHeader'
import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'


const AppRouters = () => {
  return (
    <BrowserRouter>
      <AppHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/country/:name' element={<SingleCountry/>}/>
      </Routes>
      {/* Rodape */}
    </BrowserRouter>
  )
}

export default AppRouters