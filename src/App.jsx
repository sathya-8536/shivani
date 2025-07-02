import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Navbar/Home/Home'
import Embrodery from './Components/Navbar/Embrodery/Embrodery'
import Saree from './Components/Navbar/Saree/Saree'
import Chudi from './Components/Navbar/Chudi/Chudi'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Nighty from './Nighty/Nighty'




const App = () => {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>

        <Route path="/embrodery" element={<Embrodery/>}/>
        <Route path="/saree" element={<Saree/>}/>
        <Route path="/chudi" element={<Chudi/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/nighty" element={<Nighty/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
