import React from 'react'

export const ListingBook = (content,isHome=false) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="imagen_libro.jpg" alt="Libro" className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{content.titulo}</h3>
          <p className="text-gray-600">Autor: {content.autor}</p>
          <p className="text-gray-600"> Calificacion: {content.calificacion}</p>
          <img src="{content.portada}" alt="{content.titulo}" />
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  )
}
