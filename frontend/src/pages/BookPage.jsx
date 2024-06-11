import React, { useState } from 'react';
import { ListeningBooks } from '../components/ui/ListeningBooks';
import { get } from 'react-hook-form';


const genHeaders = () => {
    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    h.append('Authorization', 'Basic ' +' Tu puta madre');
    h.append('Origin','http://localhost:5173');
    return h;
}

function BookPage() {
  const books=useState([]);
  const getBooks = async () => {
    const url="http://localhost:4000/api/books"
    try{
      const res=await fetch(url,{method:'GET'});
      const json=await res.json();
    }
    catch(err){
      console.error(err);
    }
  };
  getBooks();
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Barra de navegación */}

      {/* Sección principal */}
      <main className="container mx-auto ">

        {/* Sección de libros */}
        <section className="mt-8 px-5">
          <h2 className="text-xl font-semibold mb-4">Libros Destacados</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto"> 
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  {/* Aquí irá la imagen del libro */}
                  <img 
                    src="https://via.placeholder.com/329x466" // Direccion o ubicación de portada
                    alt="Libro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Título del libro</h3>
                  <p className="text-gray-600 mt-1">$9.99</p>
                </div>
              </div>
              
              

            ))}
          </div>
        </section>
      </main>

    </div>
  );
}

export default BookPage;
