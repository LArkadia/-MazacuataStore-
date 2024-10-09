import React, { useState } from 'react';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de los campos
    if (!validateCardNumber(cardNumber)) {
      alert('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      alert('La fecha de expiración debe ser posterior a 07/24.');
      return;
    }

    if (!validateCvv(cvv)) {
      alert('El CVV debe tener 3 dígitos.');
      return;
    }

    if (!validateCardholderName(cardholderName)) {
      alert('El nombre del titular debe contener solo letras, espacios');
      return;
    }

    // Si todas las validaciones pasan, se procede con el procesamiento del pago
    alert('Se procede con el pago');

    // ... (lógica para enviar los datos del pago a backend)
  };

  // Funciones de validación
  const validateCardNumber = (number) => /^\d{16}$/.test(number);
  const validateExpiryDate = (date) => {
    const [month, year] = date.split('/');
    const expiryDate = new Date(`20${year}`, month - 1, 1); // Mes es 0-indexado
    const currentDate = new Date();
    return expiryDate > currentDate;
  };
  const validateCvv = (cvv) => /^\d{3}$/.test(cvv);
  const validateCardholderName = (name) => /^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(name);


  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Forma de pago</h2>
      <p className="text-gray-600 mb-4">Pago con Tarjeta débito / crédito</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Número de la tarjeta
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="1234 1234 8975 4321"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
              MM/AA
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV/CVC
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardholderName">
            Nombre como aparece en la tarjeta
          </label>
          <input
            type="text"
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          Agregar forma de pago
        </button>
      </form>
    </div>
  );
}

export default Payment;
