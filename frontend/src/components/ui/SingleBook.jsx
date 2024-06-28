import React, { useEffect, useState } from 'react'
import { NotFoundComponent } from './NotFoundComponent';

export const SingleBook = ({params}) => {
  const [book, setBook] = useState([]);
  let hasTitle = params.has('title');
  useEffect(() => {
      const getBook = async () => {
        
        const title = hasTitle ? params.get('title') : '';
        const endecodedTitle = encodeURIComponent(title);
        const url = hasTitle ?
        `http://localhost:4000/api/books/single/${endecodedTitle}`:
        `http://localhost:4000/api/books/single/1`;
        try{
          const res=await fetch(url);
          const json=await res.json();
          setBook(json.body)
          console.log(book);
        }
        catch(err){
          console.error(err);
        }
      };
      getBook();
    }, [params]);
    let elem=hasTitle && Array.isArray(book) && book.length?book[0]:{};
  return (
    <> {hasTitle && Array.isArray(book) && book.length?
      <div className="min-h-screen bg-gray-100 p-5">
      <main className="container mx-auto">
        <section className="mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 ml-4 flex items-center justify-center"> {/* Portada: 1/4 del ancho */}
              <img
                src={elem.portada}
                alt={elem.titulo}
                className="w-64 h-auto rounded-lg shadow-md"
                
              />
            </div>
  
            <div className="md:w-1/2 space-y-4 mr-4"> {/* Información: 1/2 del ancho */}
              <h4 className="text-xl font-medium">{elem.titulo}</h4>
              <p className="text-gray-600">
                <span className="font-semibold">Autor:</span> {elem.autor} 
              </p>
              <p className="text-gray-600">
              <span className="font-semibold"> ISBN: </span> {elem.isbn} 
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Edición:</span> {elem.edición} 
              </p>
              <p className="text-gray-600">
              <span className="font-semibold"> Editorial:</span> {elem.editorial}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold"></span>{elem.descripcion}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Disponibles:</span> {elem.unidades_disponibles} ejemplares
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Precio:</span> ${elem.precio}
              </p>
            </div>
  
            <div className="md:w-1/4 flex items-start justify-center"> {/* Botón: 1/4 del ancho */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" isbn={elem.isbn}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>:<NotFoundComponent msg="Producto no encontrado"/>}
    </>
  )
}
