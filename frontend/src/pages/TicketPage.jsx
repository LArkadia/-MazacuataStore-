import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/IMG/mazacuataBoss.png'; // Asegúrate de tener el logo en la ruta correcta

function TicketPage() {
  const ticketData = [
    { producto: 'Libro 1', precio: 100, cantidad: 2 },
    { producto: 'Libro 2', precio: 50, cantidad: 1 },
    { producto: 'Libro 3', precio: 75, cantidad: 3 },
  ];

  const total = ticketData.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt="Logo de la compañía" className="w-20 h-20 mr-2" />
        <h1 className="text-2xl font-semibold">Muchas Gracias por haber comprado en MAZACUATA STORE</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div>
          <h3 className="font-semibold">Libro</h3>
          {ticketData.map((item, index) => (
            <p key={index}>{item.producto}</p>
          ))}
        </div>
        <div>
          <h3 className="font-semibold">Precio</h3>
          {ticketData.map((item, index) => (
            <p key={index}>${item.precio.toFixed(2)}</p>
          ))}
        </div>
        <div>
          <h3 className="font-semibold">Cantidad</h3>
          {ticketData.map((item, index) => (
            <p key={index}>{item.cantidad}</p>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Enviar una copia del Ticket a mi correo
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Guardar como PDF
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}

export default TicketPage;
