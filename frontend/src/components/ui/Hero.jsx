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


  const goToPreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full" style={{ fontSize: 25, fontWeight: 'inherit', color: 'white', padding: '5px' }}>
      <div className="mx-auto flex flex-col items-center relative w-full">
        {/* Carrusel */}
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
              className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Botones de desplazamiento */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white rounded-full p-2"
          onClick={goToPreviousImage}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white rounded-full p-2"
          onClick={goToNextImage}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};