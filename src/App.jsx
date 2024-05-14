import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/Pages/HomePage'
import AboutPage from './Components/Pages/AboutPage'
import ServicesPage from './Components/Pages/ServicesPage'
import PortifolioPage from './Components/Pages/PortifolioPage'
import ContactPage from './Components/Pages/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/portifolio' element={<PortifolioPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App
