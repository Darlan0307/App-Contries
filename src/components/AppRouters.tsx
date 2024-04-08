import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AppHeader from './AppHeader'
import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'
import AppFooter from './AppFooter'


const AppRouters = () => {
  return (
    <BrowserRouter>
      <AppHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/country/:name' element={<SingleCountry/>}/>
      </Routes>
      <AppFooter/>
    </BrowserRouter>
  )
}

export default AppRouters