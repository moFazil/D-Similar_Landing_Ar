import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import Furniture1 from './components/products/Furniture1'
import Furniture2 from './components/products/Furniture2'
import Furniture3 from './components/products/Furniture3'
import Furniture4 from './components/products/Furniture4'
import Furniture5 from './components/products/Furniture5'
import Furniture6 from './components/products/Furniture6'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='furniture1' element={<Furniture1/>}/>
        <Route path='furniture2' element={<Furniture2/>}/>
        <Route path='furniture3' element={<Furniture3/>}/>
        <Route path='furniture4' element={<Furniture4/>}/>
        <Route path='furniture5' element={<Furniture5/>}/>
        <Route path='furniture6' element={<Furniture6/>}/>
      </Routes>     
    </>
  )
}

export default App
