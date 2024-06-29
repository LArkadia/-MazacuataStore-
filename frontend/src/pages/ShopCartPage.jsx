import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import carritopet from '../assets/IMG/carritopet.png';

function ShopCartPage() {
  const navigate = useNavigate(); 
  const [cartbooks, setcartbooks] = useState([]); 

  const addToCart = (book) => {
    setcartbooks([...cartbooks, book]);
  };

  const handleRedirect = (path) => {
    navigate(path); 
  };

  return (
    <div className='carrito'> 
      <h2 className="text-2xl font-semibold mb-4 text-left"> Mi Carrito </h2>
      <div className="w-1/2 p-8 bg-white rounded-l-lg">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 text-further-right">Libros añadidos</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 text-right">
          {[...Array(1)].map((_, index) => ( 
            <div key={index} className="bg-gray-200 rounded-md p-4 shadow-md">
              <p className="text-center">Información del libro, titulo, cantidad disp</p>
            </div>
          ))}
        </div>
        <div className="flex-end-container">
          <div className="grid grid-cols-3 gap-4 mt-4 flex-item">
            {[...Array(1)].map((_, index) => ( 
              <div key={index} className="bg-gray-200 rounded-md p-4 shadow-md">
                <p className="text-center">Titulo (cantidad) precio $ MX</p>
              </div>
            ))}
          </div>
        </div>
        {cartbooks.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <button className="px-2 py-1 bg-blue-500 text-white rounded-md">-</button>
              <span className="mx-2">{item.quantity || 1}</span>
              <button className="px-2 py-1 bg-blue-500 text-white rounded-md">+</button>
              <p className="ml-4">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <p className="text-lg font-semibold text-right">Total: ${cartbooks.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => handleRedirect ('/books')}>
              Seguir comprando
            </button>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          onClick={() => handleRedirect ('/payment')} >
            Pagar
          </button>
          <img src={carritopet} alt="Imagen del carrito" className="mt-4 img-resize" />
        </div>
      </div>
    </div>
  );
}

export default ShopCartPage;
