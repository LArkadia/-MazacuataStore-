import React, { useState } from 'react';

function PointOfSale() {
  const [cartItems, setCartItems] = useState([]); // Estado para los libros en el carrito
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Función para manejar la búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // ... (otras funciones para modificar cantidad, eliminar del carrito, etc.)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sección de búsqueda de productos */}
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Buscar productos</h2>
        <input
          type="text"
          placeholder="Título, Autor o ISBN"
          className="w-full p-2 rounded-md border border-gray-300"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Resultados de la búsqueda (libros) */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Mapea los resultados de la búsqueda y muestra cada libro */}
          {[...Array(10)].map((_, index) => ( 
            <div key={index} className="bg-gray-200 rounded-md p-4 shadow-md">
              <p className="text-center">Título del libro</p>
              <button onClick={() => addToCart({ title: 'Título del libro', price: 200 })}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de venta */}
      <div className="w-1/2 p-8 bg-white rounded-l-lg">
        <h2 className="text-2xl font-semibold mb-4">Venta</h2>

        {/* Artículos en el carrito */}
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <p>{item.title}</p>
              <p className="text-gray-600">ISBN: {/* Mostrar ISBN */}</p>
            </div>
            <div className="flex items-center">
              <button className="px-2 py-1 bg-blue-500 text-white rounded-md">-</button>
              <span className="mx-2">{item.quantity || 1}</span>
              <button className="px-2 py-1 bg-blue-500 text-white rounded-md">+</button>
              <p className="ml-4">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}

        <div className="mt-8">
          <p className="text-lg font-semibold">Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4">
            Cobro
          </button>
        </div>
      </div>
    </div>
  );
}

export default PointOfSale;
