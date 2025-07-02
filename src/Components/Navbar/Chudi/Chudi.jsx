import React, {useEffect,useState} from 'react'
import './Chudi.css'
import { Link } from 'react-router-dom'
import what from '../../../assets/images/whatsapp.png'
import chudi_1 from '../../../assets/images/chudi-1.jpg'
import chudi_2 from '../../../assets/images/chudi-2.jpg'
import chudi_3 from '../../../assets/images/chudi-3.jpg'
import chudi_4 from '../../../assets/images/chudi-4.jpg'
import chudi_5 from '../../../assets/images/chudi-5.jpg'
import chudi_6 from '../../../assets/images/chudi-6.jpg'
import chudi_7 from '../../../assets/images/chudi-7.jpg'
import chudi_8 from '../../../assets/images/chudi-8.jpg'
import chudi_9 from '../../../assets/images/chudi-9.jpg'
import chudi_10 from '../../../assets/images/chudi-10.jpg'
import chudi_11 from '../../../assets/images/chudi-11.jpg'
import chudi_12 from '../../../assets/images/chudi-12.jpg'
import chudi_13 from '../../../assets/images/chudi-13.jpg'
import chudi_14 from '../../../assets/images/chudi-14.jpg'
import chudi_15 from '../../../assets/images/chudi-15.jpg'
import chudi_16 from '../../../assets/images/chudi-16.jpg'
import chudi_17 from '../../../assets/images/chudi-17.jpg'
import chudi_18 from '../../../assets/images/chudi-18.jpg'
import chudi_19 from '../../../assets/images/chudi-19.jpg'
import chudi_20 from '../../../assets/images/chudi-20.jpg'
import chudi_21 from '../../../assets/images/chudi-21.jpg'
import chudi_22 from '../../../assets/images/chudi-22.jpg'
import chudi_23 from '../../../assets/images/chudi-23.jpg'
import chudi_24 from '../../../assets/images/chudi-24.jpg'
import chudi_25 from '../../../assets/images/chudi-25.jpg'
import chudi_26 from '../../../assets/images/chudi-26.jpg'
import chudi_27 from '../../../assets/images/chudi-27.jpg'
import chudi_28 from '../../../assets/images/chudi-28.jpg'
import chudi_29 from '../../../assets/images/chudi-29.jpg'
import chudi_30 from '../../../assets/images/chudi-30.jpg'
import chudi_31 from '../../../assets/images/chudi-31.jpg'
import chudi_32 from '../../../assets/images/chudi-32.jpg'
import chudi_33 from '../../../assets/images/chudi-33.jpg'
import chudi_34 from '../../../assets/images/chudi-34.jpg'
import chudi_35 from '../../../assets/images/chudi-35.jpg'
import chudi_36 from '../../../assets/images/chudi-36.jpg'
import chudi_37 from '../../../assets/images/chudi-37.jpg'
import chudi_38 from '../../../assets/images/chudi-38.jpg'
import chudi_39 from '../../../assets/images/chudi-39.jpg'
import chudi_40 from '../../../assets/images/chudi-40.jpg'
import chudi_41 from '../../../assets/images/chudi-41.jpg'
import chudi_42 from '../../../assets/images/chudi-42.jpg'
import chudi_43 from '../../../assets/images/chudi-43.jpg'
import chudi_44 from '../../../assets/images/chudi-44.jpg'
import chudi_45 from '../../../assets/images/chudi-45.jpg'
import chudi_46 from '../../../assets/images/chudi-46.jpg'
import chudi_47 from '../../../assets/images/chudi-47.jpg'
import chudi_48 from '../../../assets/images/chudi-48.jpg'
import chudi_49 from '../../../assets/images/chudi-49.jpg'
import chudi_50 from '../../../assets/images/chudi-50.jpg'
import chudi_51 from '../../../assets/images/chudi-51.jpg'
import chudi_52 from '../../../assets/images/chudi-52.jpg'
import chudi_53 from '../../../assets/images/chudi-53.jpg'
import chudi_54 from '../../../assets/images/chudi-54.jpg'




const Chudi = () => {
    const [activeCard, setActiveCard] = useState(null);
      
        useEffect(() => {
          document.body.classList.add('chudi-bg');
          return () => {
            document.body.classList.remove('chudi-bg');
          };
        }, []);
         const cards = [
                {
                  id: 1,
                  image: chudi_1,  
                  name: 'Click the whatsapp icon to buy',
                  desc: '',
                  customClass: 'car-style-1',
                },
                {
                    id: 2,
                    image: chudi_2,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-2',
                  },
                  {
                    id: 3,
                    image: chudi_3,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-3',
                  },
                  {
                    id: 4,
                    image: chudi_4,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-4',
                  },
                  {
                    id: 5,
                    image: chudi_5,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-5',
                  },
                  {
                    id: 6,
                    image: chudi_6,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-6',
                  },
                  {
                    id: 7,
                    image: chudi_7,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-7',
                  },
                  {
                    id: 8,
                    image: chudi_8,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-8',
                  },
                  {
                    id: 9,
                    image: chudi_9,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-9',
                  },
                  {
                    id: 10,
                    image: chudi_10,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-10',
                  },
                  {
                    id: 11,
                    image: chudi_11,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-11',
                  },
                  {
                    id: 12,
                    image: chudi_12,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-12',
                  },
                  {
                    id: 13,
                    image: chudi_13,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-13',
                  },
                  {
                    id: 14,
                    image: chudi_14,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-14',
                  },
                  {
                    id: 15,
                    image: chudi_15,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-15',
                  },
                  {
                    id: 16,
                    image: chudi_16,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-16',
                  },
                  {
                    id: 17,
                    image: chudi_17,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-17',
                  },
                  {
                    id: 18,
                    image: chudi_18,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-18',
                  },
                  {
                    id: 19,
                    image: chudi_19,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-19',
                  },
                  {
                    id: 20,
                    image: chudi_20,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-20',
                  },
                  {
                    id: 21,
                    image: chudi_21,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-21',
                  },
                  {
                    id: 22,
                    image: chudi_22,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-22',
                  },
                  {
                    id: 23,
                    image: chudi_23,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-23',
                  },
                  {
                    id: 24,
                    image: chudi_24,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-24',
                  },
                  {
                    id: 25,
                    image: chudi_25,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-25',
                  },
                  {
                    id: 26,
                    image: chudi_26,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-26',
                  },
                  {
                    id: 27,
                    image: chudi_27,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-27',
                  },
                  {
                    id: 28,
                    image: chudi_28,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-28',
                  },
                  {
                    id: 29,
                    image: chudi_29,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-29',
                  },
                  {
                    id: 30,
                    image: chudi_30,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-30',
                  },
                  {
                    id: 31,
                    image: chudi_31,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-31',
                  },
                  {
                    id: 32,
                    image: chudi_32,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-32',
                  },
                  {
                    id: 33,
                    image: chudi_33,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-33',
                  },
                  {
                    id: 34,
                    image: chudi_34,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-34',
                  },
                  {
                    id: 35,
                    image: chudi_35,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-35',
                  },
                  {
                    id: 36,
                    image: chudi_36,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-36',
                  },
                  {
                    id: 37,
                    image: chudi_37,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-37',
                  },
                  {
                    id: 38,
                    image: chudi_38,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-38',
                  },
                  {
                    id: 39,
                    image: chudi_39,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-39',
                  },
                  {
                    id: 40,
                    image: chudi_40,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-40',
                  },
                  {
                    id: 41,
                    image: chudi_41,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-41',
                  },
                  {
                    id: 42,
                    image: chudi_42,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-42',
                  },
                  {
                    id: 43,
                    image: chudi_43,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-43',
                  },
                  {
                    id: 44,
                    image: chudi_44,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-44',
                  },
                  {
                    id: 45,
                    image: chudi_45,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-45',
                  },
                  {
                    id: 46,
                    image: chudi_46,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-46',
                  },
                  {
                    id: 47,
                    image: chudi_47,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-47',
                  },
                  {
                    id: 48,
                    image: chudi_48,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-48',
                  },
                  {
                    id: 49,
                    image: chudi_49,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-49',
                  },
                  {
                    id: 50,
                    image: chudi_50,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-50',
                  },
                  {
                    id: 51,
                    image: chudi_51,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-51',
                  },
                  {
                    id: 52,
                    image: chudi_52,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-52',
                  },
                  {
                    id: 53,
                    image: chudi_53,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-53',
                  },
                  {
                    id: 54,
                    image: chudi_54,  
                    name: 'Click the whatsapp icon to buy',
                    desc: '',
                    customClass: 'car-style-54',
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
    
    <div className="chudi-wrapper">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`chudi-card ${card.customClass}`}
          onClick={() => handleCardClick(card)}
        >
          <img src={card.image} alt={card.name} className="chudi-img" />
        </div>
      ))}
    </div>

    {activeCard && (
      <div className="chudi-screen" onClick={handleClose}>
        <div className="chudi-content">
          <img
            src={activeCard.image}
            alt={activeCard.name}
            className="chud-img"
          />
          <h2 className="chudi-title">{activeCard.name}</h2>
          <p className="chudi-desc"><Link 
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
    <div className='chudi-cat'>
    <h1>Chudi's Collection</h1>
  </div>
  </>
  )
}

export default Chudi
