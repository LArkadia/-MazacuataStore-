import React from 'react'

export const ListingBook = (content,index=1,isHome=false) => {
    console.log(content);
    let data=content.data;
  return (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  {/* Aquí irá la imagen del libro */}
                  <img 
                    src={data.portada} // Direccion o ubicación de portada
                    alt={data.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{data.titulo}</h3>
                  <p className="text-gray-600 mt-1">{data.precio}</p>
                </div>
    </div>
  )
}
