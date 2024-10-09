import React, { useState } from 'react';
import axios from 'axios';
import SaleBook from '../components/ui/SaleBook';
import CartPOSItem from '../components/ui/CartPOSItem';

function PointOfSale() {
  const [cartItems, setCartItems] = useState([]); // Estado para los libros en el carrito
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para los resultados de búsqueda
  const [loading, setLoading] = useState(false); // Estado para mostrar el cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para manejar la búsqueda
  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 2) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:4000/api/books/single/${event.target.value}`);
        if (Array.isArray(response.data.body)) {
          setSearchResults(response.data.body);
        } else {
          setSearchResults([]); // Asegúrate de que sea un array
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

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

        {/* Mostrar estado de carga o errores */}
        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Resultados de la búsqueda (libros) */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {searchResults.map((book, index) => (
            <div key={index}>
              <SaleBook data={book} />
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4"
                onClick={() => addToCart(book)}
              >
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
          <CartPOSItem key={index} item={item} />
        ))}

        <div className="mt-8">
          <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4">
            Cobro
          </button>
        </div>
      </div>
    </div>
  );
}

export default PointOfSale;
