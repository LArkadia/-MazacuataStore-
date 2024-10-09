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

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 jumbotron jumbotron-icon">
        {/* Libro más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
        <i class="fa fa-book fa-6" aria-hidden="true"></i>
          <p className="text-center">Libro más vendido:</p>
          <p className="font-semibold">Título del libro</p>
        </div>

        {/* Género más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
        <i class="fa fa-bookmark fa-6" aria-hidden="true"></i>
          <p className="text-center">Género más vendido:</p>
          <p className="font-semibold">Nombre del género</p>
        </div>

        {/* Autor más vendido */}
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
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
