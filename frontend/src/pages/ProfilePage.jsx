import React, { useState } from 'react';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    address: false,
    payment: false
  });

  const [userData, setUserData] = useState({
    name: 'Alfredo Bautista',
    email: 'reverseflash587@email.com',
    address: 'micalle #24, Colonia LaMisma, Estado de México',
    payment: '**** **** **** 1584'
  });

  const toggleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleChange = (event, field) => {
    setUserData({ ...userData, [field]: event.target.value });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Tu cuenta</h1>

      {/* Campos de información */}
      <div className="space-y-4">
        {[
          { label: 'Nombre', field: 'name' },
          { label: 'Correo electrónico', field: 'email' },
          { label: 'Dirección de entregas', field: 'address' },
          { label: 'Forma de pago', field: 'payment' },
        ].map((item) => (
          <div key={item.field} className="flex items-center justify-between border-b pb-2">
            {isEditing[item.field] ? (
              <input
                type={item.field === 'payment' ? 'password' : 'text'}
                value={userData[item.field]}
                onChange={(e) => handleChange(e, item.field)}
                className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            ) : (
              <p className="text-gray-700">
                {item.label}: {userData[item.field]}
              </p>
            )}
            <button
              onClick={() => toggleEdit(item.field)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md"
            >
              {isEditing[item.field] ? 'Guardar' : 'Editar'}
            </button>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold mt-8 mb-4">Pedidos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Aquí se planea mapear tus pedidos del usuario */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-md p-4 flex items-center justify-center">
            <p>Libro {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
