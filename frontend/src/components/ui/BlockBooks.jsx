import React, { useState, useEffect } from 'react';
import { ListeningBooks } from './ListeningBooks';
import { get, set } from 'react-hook-form';
import { ListingBook } from './ListingBook';
import { Navigate, redirect } from 'react-router';


export const BlockBooks = ({isHome=false}) => {
    const [isbnSearch,setisbnSearch]=useState('');
    const [goSearch,setGoSearch]=useState(false);
    const [books, setBooks] = useState([]);
    function search() {
      if(isbnSearch.length>0){
        setGoSearch(true);
      }
    }
    useEffect(() => {
      const getBooks = async () => {
        const url=isHome?"http://localhost:4000/api/books/top":"http://localhost:4000/api/books";
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
    if(goSearch) return (<Navigate to={`single?isbn=${isbnSearch}`}/>)
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        {/* Barra de navegación */}
        {/* Sección principal */}
        <main className="container mx-auto ">
          {/*Menu busqueda*/}
          {isHome?<></>:
          <div className="c">
            <input   name="isbn" onChange={(e)=>{setisbnSearch(e.target.value)}}/>
            <button type="submit" onClick={search}>Enviar</button>
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
