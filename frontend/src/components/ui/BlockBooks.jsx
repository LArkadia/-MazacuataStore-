import React, { useState, useEffect } from 'react';
import { ListeningBooks } from './ListeningBooks';
import { get, set } from 'react-hook-form';
import { ListingBook } from './ListingBook';

export const BlockBooks = ({isHome=false}) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      const getBooks = async () => {
        const url=isHome==true?"http://localhost:4000/api/books/top":"http://localhost:4000/api/books";
        console.log(isHome);
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
          {/*Menu busqueda*/}
          {isHome?<></>:
          <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
          </div>
          }
          {/* Sección de libros */}
          <section className="mt-8 px-5">
          <h2 className="text-xl font-semibold mb-4">{isHome?"Libros Destacados":"Libros"}</h2>
          {
            (Array.isArray(books)? 
            (<ListeningBooks data={books}/>) :console.log("Wait"))
          }
          </section>
        </main>
  
      </div>
    );
}
