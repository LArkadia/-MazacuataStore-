import React from 'react'
import { Link } from 'react-router-dom';

export const ListingBook = (content,index=1,isHome=false) => {
    console.log(content);
    let data=content.data;
  return (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <Link to={`http://localhost:5173/books/single?title=${data.titulo}`}>
          <img 
            src={data.portada} // Direccion o ubicación de portada
            alt={data.titulo}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{data.titulo}</h3>
        <p className="text-gray-600 ">Disponibles: {data.unidades_disponibles}</p>
        <p className="text-gray-600 ">Calificación: {data.calificacion}</p>
        <p className="text-gray-600 "><i class="fa-solid fa-money-bill"></i> ${data.precio}</p>
      </div>
    </div>
  )
}
