import React, { useState, useEffect } from 'react';
import carruselBienvenida from '../../assets/IMG/carrusel1.png';
import carrusel31min from '../../assets/IMG/carrusel2.png';
import carruselPenguin from '../../assets/IMG/carrusel3.png'; 

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [carruselBienvenida, carrusel31min, carruselPenguin];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 8000); // Cambia la imagen cada 8 segundos

    return () => clearInterval(interval); 
  }, [currentImageIndex, images.length]);

  return (
    <div style={{ fontSize: 25, fontWeight: 'inherit', color: 'white', padding: '5px' }}>
      <div className="mx-auto flex flex-col items-center relative w-full"> 
        <div 
          className="carousel-container w-full" 
          style={{ 
            overflow: 'hidden', 
            marginTop: '0',   
            marginLeft: '0',  
            marginRight: '0', 
            aspectRatio: '2732 / 840', 
          }}
        >
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Imagen ${index + 1}`} 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'opacity 1s ease',
                opacity: index === currentImageIndex ? 1 : 0, 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
