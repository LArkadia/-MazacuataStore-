import React, { useState } from 'react';
import bookImage from '../assets/IMG/mazacuataBoss.png'; 

function Scanner() {
  const [isbn, setIsbn] = useState('');

  const handleSearch = () => {
    console.log(`Buscando precio para ISBN: ${isbn}`);
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

        <div className="flex items-center rounded-md shadow-md">
          <input
            type="text"
            placeholder="ISBN"
            className="py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
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
      </div>
    </div>
  );
}

export default Scanner;

