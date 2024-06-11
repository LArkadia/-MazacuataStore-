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
        {/* Carrusel de libros destacados */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Libros Destacados</h2>
          {/* Aquí puedes usar un carrusel de imágenes o una galería */}
        </section>

        {/* Sección de novedades */}
      </main>

    </div>
  );
}

export default BookPage;
