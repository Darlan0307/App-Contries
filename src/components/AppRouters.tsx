import { BrowserRouter,Routes,Route} from 'react-router-dom'


const AppRouters = () => {
  return (
    <BrowserRouter>

      {/* Cabeçalho */}
      
      <Routes>

        <Route index element={<h1>Home</h1>}/>

      </Routes>


      {/* Rodape */}
    </BrowserRouter>
  )
}

export default AppRouters