import React, { useState } from 'react';
import bookImage from '../assets/IMG/mazacuataBoss.png'; 

function Scanner() {
  const [isbn, setIsbn] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError(''); // Limpiar el mensaje de error al intentar buscar
    if (/^\d{13}$/.test(isbn)) {
      // ISBN válido (13 dígitos)
      alert(`Buscando precio para ISBN: ${isbn}`);
      console.log(`Buscando precio para ISBN: ${isbn}`);
      // ... (tu lógica para buscar el precio)
    } else {
      setError('El ISBN debe tener 13 dígitos.'); 
    }
  };

  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="flex items-center justify-center md:w-1/2"> {/* Contenedor de la imagen */}
        <img
          src={bookImage}
          alt="Imagen de libro"
          className="w-64 h-96 "
        />
      </div>
      <div className=" p-8  md:w-1/2 flex flex-col items-center justify-center"> {/* Contenedor del texto y formulario */}
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          ¿No encuentras el precio de un libro?
        </h1>
        <p className="text-lg mb-6 text-gray-600">Ingresa su ISBN</p>

        <div className="flex flex-col items-center"> {/* Contenedor del formulario y error */}
          <div className="flex items-center rounded-md shadow-md mb-2">
            <input
              type="text"
              placeholder="ISBN"
              className={`py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 ${
                error ? 'border-red-500' : '' // Agrega borde rojo si hay error
              }`}
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
            >
              Buscar
            </button>
          </div>
          {error && ( // Mostrar mensaje de error si existe
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scanner;

