import React, { useState,useEffect
  
} from 'react'
import './Home.css'
import saree from '../../../assets/images/saree.png'
import eye from '../../../assets/images/eye.png'
import { Link } from 'react-router-dom'
import design from '../../../assets/images/Design.png'
import chudi from '../../../assets/images/chudi.png'
import front from '../../../assets/images/front.png'

const Home = () => {
 const [isActive, setIsActive] = useState(false)

const toggleMenu = () => {
 setIsActive(prev => !prev)
}
useEffect(() => {
 document.body.classList.add('home-bg');
 return () => {
   document.body.classList.remove('home-bg');
 };
}, []);
 return (
   <div className='page-bg'>
     <div className='head-cart'>
       <h1>SRISHIVA DESIGNER COLLECTION'S</h1>
     </div>
     <div className='home-cart'>
         <h1>Designer collections</h1>
     </div>
     <div className='saree-cart'>
       <h1></h1>
       <img src={saree} alt=''/>
     </div>
     <div className='menu'>
     <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
         <img src={eye} alt='Toggle eye icon' />
       </div>

       <ul className={`circular-menu ${isActive ? 'show' : ''}`}>

         <li1><Link to="/embrodery">Embroidery</Link><img src={design} alt=''/></li1>
         <li2><Link to="/chudi">chudi</Link><img src={chudi} alt=''/></li2>
         <li3><Link to="/saree">saree</Link><img src={front} alt=''/></li3>
         <li4><Link to="/nighty"> Nighty</Link></li4>
       </ul>
     </div>
   </div>
 )
}

export default Home