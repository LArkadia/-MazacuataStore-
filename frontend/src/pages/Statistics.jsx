import React from 'react';

function Statistics() {
  const salesData = [
    { label: 'L', value: 10 },
    { label: 'M', value: 10 },
    { label: 'X', value: 10 },
    { label: 'J', value: 10 },
    { label: 'V', value: 250 },
    { label: 'S', value: 18 },
    { label: 'D', value: 10 },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Estadísticas</h1>

      <div className="flex mb-6 items-center">
        <p className="mr-2">Semana</p>
        <select className="border rounded-md px-2 py-1">
          <option value="26">26 - 2024</option>
          {/* Puedes agregar más opciones de semanas aquí */}
        </select>
      </div>

      {/* Gráfica de barras (Ventas) */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Ventas</h2>
        <div className="flex space-x-4">
          {salesData.map((item) => (
            <div key={item.label}>
              <div className="bg-blue-500 h-[calc(100px*(1-(100-${item.value})/100))] w-10 rounded-t-md" />
              <p className="text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8"></div> 

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Libro más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.53 1.087l-1.76 1.767a.999.999 0 101.41 1.41l1.76-1.767A7.968 7.968 0 009 4.804zM10 15a5 5 0 100-10 5 5 0 000 10z" />
          </svg>
          <p className="text-center">Libro más vendido:</p>
          <p className="font-semibold">Título del libro</p>
        </div>

        {/* Género más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1.75 1.75 0 00-2.475-2.475 1.75 1.75 0 002.475 2.475zm1.394-1.011a1.25 1.25 0 00-1.768-1.768 1.25 1.25 0 001.768 1.768z" clipRule="evenodd" />
          </svg>
          <p className="text-center">Género más vendido:</p>
          <p className="font-semibold">Nombre del género</p>
        </div>

        {/* Autor más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <p className="text-center">Autor más vendido:</p>
          <p className="font-semibold">Nombre del autor</p>
        </div>
      </div>
       
      

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-8">
        Exportar Datos CSV
      </button>
    </div>
  );
}

export default Statistics;
