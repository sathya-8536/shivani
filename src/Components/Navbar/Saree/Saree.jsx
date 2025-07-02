import React, { useState, useEffect } from 'react'
import './Saree.css'
import { Link } from 'react-router-dom'
import what from '../../../assets/images/whatsapp.png'
import saree_1 from '../../../assets/images/saree-1.jpg'
import saree_2 from '../../../assets/images/saree-2.jpg'
import saree_3 from '../../../assets/images/saree-3.jpg'
import saree_4 from '../../../assets/images/saree-4.jpg'
import saree_5 from '../../../assets/images/saree-5.jpg'
import saree_6 from '../../../assets/images/saree-6.jpg'
import saree_7 from '../../../assets/images/saree-7.jpg'
import saree_8 from '../../../assets/images/saree-8.jpg'
import saree_9 from '../../../assets/images/saree-9.jpg'
import saree_10 from '../../../assets/images/saree-10.jpg'
import saree_11 from '../../../assets/images/saree-11.jpg'
import saree_12 from '../../../assets/images/saree-12.jpg'
import saree_13 from '../../../assets/images/saree-13.jpg'
import saree_14 from '../../../assets/images/saree-14.jpg'
import saree_15 from '../../../assets/images/saree-15.jpg'
import saree_16 from '../../../assets/images/saree-16.jpg'
import saree_17 from '../../../assets/images/saree-17.jpg'
import saree_18 from '../../../assets/images/saree-18.jpg'
import saree_19 from '../../../assets/images/saree-19.jpg'
import saree_20 from '../../../assets/images/saree-20.jpg'
import saree_21 from '../../../assets/images/saree-21.jpg'
import saree_22 from '../../../assets/images/saree-22.jpg'
import saree_23 from '../../../assets/images/saree-23.jpg'
import saree_24 from '../../../assets/images/saree-24.jpg'
import saree_25 from '../../../assets/images/saree-25.jpg'
import saree_26 from '../../../assets/images/saree-26.jpg'
import saree_27 from '../../../assets/images/saree-27.jpg'

const Saree = () => {
  const [activeCard, setActiveCard] = useState(null);
  
    useEffect(() => {
      document.body.classList.add('saree-bg');
      return () => {
        document.body.classList.remove('saree-bg');
      };
    }, []);
    const cards = [
        {
          id: 1,
          image: saree_1,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-1',
        },
        {
          id: 2,
          image: saree_2,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-2',
        },
        {
          id: 3,
          image: saree_3,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-3',
        },
        {
          id: 4,
          image: saree_4,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-4',
        },
        {
          id: 5,
          image: saree_5,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-5',
        },
        {
          id: 6,
          image: saree_6,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-6',
        },
        {
          id: 7,
          image: saree_7,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-7',
        },
        {
          id: 8,
          image: saree_8,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-8',
        },
        {
          id: 9,
          image: saree_9,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-9',
        },
        {
          id: 10,
          image: saree_10,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-10',
        },
        {
          id: 11,
          image: saree_11,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-11',
        },
        {
          id: 12,
          image: saree_12,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-12',
        },
        {
          id: 13,
          image: saree_13,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-13',
        },
        {
          id: 14,
          image: saree_14,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-14',
        },
        {
          id: 15,
          image: saree_15,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-15',
        },
        {
          id: 16,
          image: saree_16,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-16',
        },
        {
          id: 17,
          image: saree_17,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-17',
        },
        {
          id: 18,
          image: saree_18,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-18',
        },
        {
          id: 19,
          image: saree_19,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-19',
        },
        {
          id: 20,
          image: saree_20,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-20',
        },
        {
          id: 21,
          image: saree_21,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-21',
        },
        {
          id: 22,
          image: saree_22,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-22',
        },
        {
          id: 23,
          image: saree_23,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-23',
        },
        {
          id: 24,
          image: saree_24,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-24',
        },
        {
          id: 25,
          image: saree_25,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-25',
        },
        {
          id: 26,
          image: saree_26,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-26',
        },
        {
          id: 27,
          image: saree_27,  
          name: 'Click the whatsapp icon to buy',
          desc: '',
          customClass: 'cart-style-27',
        },

      ]
    const handleCardClick = (card) => {
      setActiveCard(card);
    };
  
    const handleClose = () => {
      setActiveCard(null);
    };
  
  return (
    <>
    
      <div className="saree-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`saree-card ${card.customClass}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.image} alt={card.name} className="sare-img" />
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="saree-screen" onClick={handleClose}>
          <div className="saree-content">
            <img
              src={activeCard.image}
              alt={activeCard.name}
              className="sar-img"
            />
            <h2 className="saree-title">{activeCard.name}</h2>
            <p className="saree-desc"><Link 
  to={`https://wa.me/${7010422586}?text=${encodeURIComponent(activeCard.image)}`} 
  target="_blank"
  rel="noopener noreferrer"
  className='what-cart'
>
  <img src={what} alt=''/>
</Link>{activeCard.desc}</p>
          </div>
        </div>
      )}
      <div className='saree-cat'>
      <h1>Saree's collection</h1>
    </div>
    </>
  )
}

export default Saree
