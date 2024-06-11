import React, { useState, useEffect } from 'react';
import { ListeningBooks } from '../components/ui/ListeningBooks';
import { get, set } from 'react-hook-form';
import { ListingBook } from '../components/ui/ListingBook';

export const BlockBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      const getBooks = async () => {
        const url="http://localhost:4000/api/books"
        try{
          const res=await fetch(url);
          const json=await res.json();
          setBooks(json.body)
        }
        catch(err){
          console.error(err);
        }
      };
      getBooks();
    }, []);
    const arr=books;
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        {/* Barra de navegación */}
  
        {/* Sección principal */}
        <main className="container mx-auto ">
  
          {/* Sección de libros */}
          <section className="mt-8 px-5">
          <h2 className="text-xl font-semibold mb-4">Libros Destacados</h2>
          {
            (Array.isArray(books)? 
            (<ListeningBooks data={books}/>) :console.log("Wait"))
          }
          </section>
        </main>
  
      </div>
    );
}
