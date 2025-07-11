import React, { useEffect, useState } from 'react';
import './Service.css';
import service from '../../assets/images/service.jpeg';
import aari from '../../assets/images/aari.jpg';
import mirror from '../../assets/images/mirror.jpg'
import pico from '../../assets/images/pico.jpg'
import uni from '../../assets/images/uni.jpg'
import shirt from '../../assets/images/shirt.jpg'
import cap from '../../assets/images/cap.jpg'
import towel from '../../assets/images/towel.jpg'
import logo from '../../assets/images/logo.jpg'
import pillow from '../../assets/images/pillow.jpg'
import mar from '../../assets/images/mar.jpg'
import name from '../../assets/images/name.jpg'
import ph from '../../assets/images/ph.jpg'
import com from '../../assets/images/com.jpg'

const Service = () => {
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
      document.body.classList.add('service-bg');
      return () => {
        document.body.classList.remove('service-bg');
      };
    }, []);
  
    const handleCardClick = (image) => {
      setActiveImage(image);
    };
  
    const handleClose = () => {
      setActiveImage(null);
    };
  return (
    <div>
      <div className='ser-cart'>
        <img src={service} alt='' />
      </div>

      <div className='overlay'></div>

      {/* Clickable Aari Work */}
      <div className='aari-cart' onClick={() => handleCardClick(aari)}>
        <h1>Aari works</h1>
      </div>

      {/* Other static cards */}
      <div className='aari_1-cart' onClick={() => handleCardClick(mirror)}><h1>Mirror works</h1></div>
      <div className='aari_2-cart' onClick={() => handleCardClick(pico)}><h1>Saree pico works</h1></div>
      <div className='aari_3-cart' onClick={() => handleCardClick(uni)}><h1>Name Embroidery in uniform</h1></div>
      <div className='aari_4-cart' onClick={() => handleCardClick(shirt)}><h1>T-Shirt Embroidery Works</h1></div>
      <div className='aari_5-cart' onClick={() => handleCardClick(cap)}><h1>Caps Embroidery Works</h1></div>
      <div className='aari_6-cart' onClick={() => handleCardClick(towel)}><h1>Towels Embroidery Works</h1></div>
      <div className='aari_7-cart' onClick={() => handleCardClick(logo)}><h1>Uniform logo Embroidery Works</h1></div>
      <div className='aari_8-cart' onClick={() => handleCardClick(pillow)}><h1>Pillow cover Embroidery Works</h1></div>
      <div className='aari_9-cart' onClick={() => handleCardClick(mar)}><h1>Marriage saree Embroidery Works</h1></div>
      <div className='aari_10-cart' onClick={() => handleCardClick(name)}><h1>Name Embroidery Works</h1></div>
      <div className='aari_11-cart' onClick={() => handleCardClick(ph)}><h1>Customized photo designing Embroidery Works</h1></div>
      <div className='aari_12-cart' onClick={() => handleCardClick(com)}><h1>Computerised Machine Embroidery Works</h1></div>

      {/* Modal or Pop-up with Image */}
      {activeImage && (
        <div className="aari-screen" onClick={handleClose}>
          <div className="aari-content">
          <img src={activeImage} alt="Embroidery work" className="aari-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
