import React, { useState, useEffect } from 'react'
import './Nighty.css';
import { Link } from 'react-router-dom'
import what from '../assets/images/whatsapp.png'
import ni_1 from '../assets/images/night-1.jpg'
import ni_2 from '../assets/images/night-2.jpg'
import ni_3 from '../assets/images/night-3.jpg'
import ni_4 from '../assets/images/night-4.jpg'
const Nighty = () => {
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
              image: ni_1,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-1',
            },
            {
              id: 2,
              image: ni_2,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-2',
            },
            {
              id: 3,
              image: ni_3,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-3',
            },
            {
              id: 4,
              image: ni_4,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-4',
            },
            ]
    const handleCardClick = (card) => {
      setActiveCard(card);
    };
  
    const handleClose = () => {
      setActiveCard(null);
    };
    return(
         <>
            
              <div className="night-wrapper">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`night-card ${card.customClass}`}
                    onClick={() => handleCardClick(card)}
                  >
                    <img src={card.image} alt={card.name} className="night-img" />
                  </div>
                ))}
              </div>
        
              {activeCard && (
                <div className="night-screen" onClick={handleClose}>
                  <div className="night-content">
                    <img
                      src={activeCard.image}
                      alt={activeCard.name}
                      className="ni-img"
                    />
                    <h2 className="night-title">{activeCard.name}</h2>
                    <p className="night-desc"><Link 
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
            <div className="ni-card">
      <h1>Nighty's Collections</h1>
      </div>
      </>
    );
};
export default Nighty;