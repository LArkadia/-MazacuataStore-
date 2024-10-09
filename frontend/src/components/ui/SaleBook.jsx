import React from 'react';
import { Link } from 'react-router-dom';

const SaleBook = ({ data, index = 1 }) => {
  return (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <Link to={`http://localhost:5173/books/single?title=${data.titulo}`}>
          <img 
            src={data.portada} // Dirección o ubicación de portada
            alt={data.titulo}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{data.titulo}</h3>
        <p className="text-gray-600">Disponibles: {data.unidades_disponibles}</p>
        <p className="text-gray-600"><i className="fa-solid fa-money-bill"></i> ${data.precio}</p>
      </div>
    </div>
  );
};

export default SaleBook;
