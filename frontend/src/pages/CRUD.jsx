import React, { useState, useEffect } from 'react';

function CRUD() {
  const [selectedTable, setSelectedTable] = useState('Clientes'); // Tabla seleccionada por defecto
  const [compras, setCompras] = useState([]); // Datos de compras
  const [clientes, setClientes] = useState([]); // Datos de clientes
  const [libros, setLibros] = useState([]); // Datos de libros
  const [tickets, setTickets] = useState([]); // Datos de tickets
  const [usuarios, setUsuarios] = useState([]); // Datos de usuarios
  const [ventas, setVentas] = useState([]); // Datos de ventas

  const [newCliente, setNewCliente] = useState({ id: '', nombre: '', apellidos: '', tipoUsuario: '', direccion: '', rfc: '' }); // Campos de clientes
  const [newLibro, setNewLibro] = useState({ isbn: '', titulo: '', autor: '', editorial: '', edicion: '', descripcion: '', precio: '', calificacion: '', portada: '', unidades_disponibles: '', ubicacion: '', genero: '' }); // Campos de libros
  const [newTicket, setNewTicket] = useState({ id_ticket: '', id_compra: '', isbn: '', cantidad: '', precio_venta: '' }); // Campos de tickets
  const [newUsuario, setNewUsuario] = useState({ id: '', nombre: '', apellidos: '', tipo_usuario: '', direccion: '', rfc: '' }); // Campos de usuarios

  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Lógica para cargar los datos al seleccionar la tabla
    // (Reemplazar con la lógica de tu API o fuente de datos)
  }, [selectedTable]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedTable === 'Clientes') {
      setNewCliente({ ...newCliente, [name]: value });
    } else if (selectedTable === 'Libros') {
      setNewLibro({ ...newLibro, [name]: value });
    } else if (selectedTable === 'Usuarios') {
      setNewUsuario({ ...newUsuario, [name]: value });
    }
  };

  const handleAddItem = () => {
    let isValid = true; // Variable para controlar si todos los campos son válidos
  
    // Validación de campos según la tabla seleccionada
    if (selectedTable === 'Clientes') {
      isValid = validateCliente(newCliente); 
    } else if (selectedTable === 'Libros') {
      isValid = validateLibro(newLibro);
    } else if (selectedTable === 'Usuarios') {
      isValid = validateUsuario(newUsuario);
    }
  
    if (isValid) {
      // Si todos los campos son válidos, procede con la adición del elemento
      if (selectedTable === 'Clientes') {
        setClientes([...clientes, newCliente]);
        setNewCliente({ id: '', nombre: '', apellidos: '', tipoUsuario: '', direccion: '', rfc: '' });
      } else if (selectedTable === 'Libros') {
        setLibros([...libros, newLibro]);
        setNewLibro({ isbn: '', titulo: '', autor: '', editorial: '', edicion: '', descripcion: '', precio: '', calificacion: '', portada: '', unidades_disponibles: '', ubicacion: '', genero: '' });
      } else if (selectedTable === 'Usuarios') {
        setUsuarios([...usuarios, newUsuario]);
        setNewUsuario({ id: '', nombre: '', apellidos: '', tipo_usuario: '', direccion: '', rfc: '' });
      }
  
      // Lógica para guardar el nuevo elemento en tu API o fuente de datos
      // (Reemplaza este comentario con tu implementación)
      // Ejemplo:
      // fetch('/api/clientes', {
      //   method: 'POST',
      //   body: JSON.stringify(newCliente),
      //   // ...
      // });
  
      setEditMode(false);
    } else {
      // Muestra un mensaje de error al usuario o realiza alguna otra acción
      alert('Oops. Verifica que hayas llenado los campos correctamente :).');
    }
  };
  

  const validateCliente = (cliente) => {
    // Validación del nombre (solo letras y espacios)
    if (!/^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(cliente.nombre)) {
      return false; 
    }
  
    // Validación de los apellidos (solo letras y espacios)
    if (!/^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(cliente.apellidos)) {
      return false;
    }
  
    // Validación del RFC (formato específico)
    if (!/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{6}[A-Z0-9]{3}$/i.test(cliente.rfc)) {
      return false;
    }
  
    return true; 
  };
  
  const validateLibro = (libro) => {
    // Validación del ISBN (13 dígitos)
    if (!/^\d{13}$/.test(libro.isbn)) {
      return false;
    }

  
    // Validación de campos de texto (no más de 255 caracteres)
    for (const campo of ['titulo', 'editorial', 'descripcion', 'ubicacion', 'genero']) {
      if (libro[campo].length > 255) {
        return false;
      }
    }
    
    // Validación nombre del autor// Validación del nombre (solo letras y espacios)
    if (!/^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(libro.autor)) {
      return false; 
    }

    // Validación del precio y calificación (flotantes, rangos específicos)
    if (isNaN(parseFloat(libro.precio)) || parseFloat(libro.precio) < 0) {
      return false;
    }
    if (isNaN(parseFloat(libro.calificacion)) || parseFloat(libro.calificacion) < 0 || parseFloat(libro.calificacion) > 5.0) {
      return false;
    }
  
    // Validación de la portada (debe comenzar con "https://")
    if (!libro.portada.startsWith("https://")) {
      return false;
    }
  
    // Validación de unidades disponibles (entero no negativo)
    if (!/^\d+$/.test(libro.unidades_disponibles) || parseInt(libro.unidades_disponibles) < 0) {
      return false;
    }
  
    // Validación del género (no debe contener números)
    if (/\d/.test(libro.genero)) {
      return false;
    }
  
    return true;
  };
  
  const validateUsuario = (usuario) => {
    // Validación del nombre y apellidos (solo letras y espacios)
    if (!/^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(usuario.nombre) || !/^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(usuario.apellidos)) {
      return false;
    }
  
    // Validación del RFC (formato específico)
    if (!/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{6}[A-Z0-9]{3}$/i.test(usuario.rfc)) {
      return false;
    }
  
    return true;
  };
  

  const handleEditItem = () => {
    if (selectedTable === 'Clientes') {
      setClientes(clientes.map(cliente => (cliente.id === selectedItem.id ? newCliente : cliente)));
      setNewCliente({ id: '', nombre: '', apellidos: '', tipoUsuario: '', direccion: '', rfc: '' });
    } else if (selectedTable === 'Libros') {
      setLibros(libros.map(libro => (libro.isbn === selectedItem.isbn ? newLibro : libro)));
      setNewLibro({ isbn: '', titulo: '', autor: '', editorial: '', edicion: '', descripcion: '', precio: '', calificacion: '', portada: '', unidades_disponibles: '', ubicacion: '', genero: '' });
    } else if (selectedTable === 'Usuarios') {
      setUsuarios(usuarios.map(usuario => (usuario.id === selectedItem.id ? newUsuario : usuario)));
      setNewUsuario({ id: '', nombre: '', apellidos: '', tipo_usuario: '', direccion: '', rfc: '' });
    }
    setEditMode(false);
    setSelectedItem(null);
  };

  const handleDeleteItem = (id) => {
    if (selectedTable === 'Clientes') {
      setClientes(clientes.filter(cliente => cliente.id !== id));
    } else if (selectedTable === 'Libros') {
      setLibros(libros.filter(libro => libro.isbn !== id));
    } else if (selectedTable === 'Usuarios') {
      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    }
  };

  const handleClearForm = () => {
    if (selectedTable === 'Clientes') {
      setNewCliente({ id: '', nombre: '', apellidos: '', tipoUsuario: '', direccion: '', rfc: '' });
    } else if (selectedTable === 'Libros') {
      setNewLibro({ isbn: '', titulo: '', autor: '', editorial: '', edicion: '', descripcion: '', precio: '', calificacion: '', portada: '', unidades_disponibles: '', ubicacion: '', genero: '' });
    } else if (selectedTable === 'Usuarios') {
      setNewUsuario({ id: '', nombre: '', apellidos: '', tipo_usuario: '', descripcion: '', rfc: '' });
    }
    setEditMode(false);
    setSelectedItem(null);
  };

  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menú lateral */}
      <div className="w-1/6 bg-white p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-4">Tablas</h2>
        <ul className="space-y-2">
          {['Clientes', 'Compras', 'Libros', 'Tickets', 'Usuarios', 'Ventas'].map(tabla => (
            <li
              key={tabla}
              className={`text-gray-800 cursor-pointer ${selectedTable === tabla ? 'bg-gray-300' : ''} p-2 rounded`}
              onClick={() => setSelectedTable(tabla)}
            >
              {tabla}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="w-2/4 p-8 mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Administrar {selectedTable}</h1>

        {/* Formulario para crear o editar item */}
        {(selectedTable === 'Clientes' || selectedTable === 'Libros' || selectedTable === 'Usuarios') && (
          <div className="bg-white p-4 rounded-md shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{editMode ? `Editar ${selectedTable.slice(0, -1)}` : `Crear ${selectedTable.slice(0, -1)}`}</h2>
            {/* Campos del formulario */}
            {selectedTable === 'Clientes' && (
              <>
                <input type="text" name="nombre" placeholder="Nombre" value={newCliente.nombre} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="apellidos" placeholder="Apellidos" value={newCliente.apellidos} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <select 
                  name="tipoUsuario" 
                  value={newCliente.tipoUsuario} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Seleccione el tipo de usuario</option>
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
                <input type="text" name="direccion" placeholder="Dirección" value={newCliente.direccion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="rfc" placeholder="RFC" value={newCliente.rfc} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
              </>
            )}
            {selectedTable === 'Libros' && (
              <>
                <input type="text" name="isbn" placeholder="ISBN" value={newLibro.isbn} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="titulo" placeholder="Título" value={newLibro.titulo} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="autor" placeholder="Autor" value={newLibro.autor} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <div className="grid grid-cols-2 gap-4">
                <input type="text" name="editorial" placeholder="Editorial" value={newLibro.editorial} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="edicion" placeholder="Edición" value={newLibro.edicion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <input type="text" name="descripcion" placeholder="Descripción" value={newLibro.descripcion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <div className="grid grid-cols-2 gap-4">
                <input type="text" name="precio" placeholder="Precio" value={newLibro.precio} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="calificacion" placeholder="Calificación" value={newLibro.calificacion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <input type="text" name="portada" placeholder="Portada" value={newLibro.portada} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <div className="grid grid-cols-3 gap-4">
                <input type="text" name="unidades_disponibles" placeholder="Unidades Disponibles" value={newLibro.unidades_disponibles} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="ubicacion" placeholder="Ubicación" value={newLibro.ubicacion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="genero" placeholder="Género" value={newLibro.genero} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
              </>
            )}
            {selectedTable === 'Usuarios' && (
              <>
                <input type="text" name="nombre" placeholder="Nombre" value={newUsuario.nombre} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="apellidos" placeholder="Apellidos" value={newUsuario.apellidos} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <select 
                  name="tipo_usuario" 
                  value={newUsuario.tipo_usuario} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Seleccione el tipo de usuario</option>
                  <option value="admni">Admin</option>
                  <option value="vendedor">Vendedor</option>
                </select>
                <input type="text" name="direccion" placeholder="Dirección" value={newUsuario.direccion} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
                <input type="text" name="rfc" placeholder="RFC" value={newUsuario.rfc} onChange={handleInputChange} className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300" />
              </>
            )}
            <div className="flex justify-end mt-4">
              <button onClick={editMode ? handleEditItem : handleAddItem} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline`}>
                {editMode ? 'Guardar Cambios' : 'Agregar'}
              </button>
              <button onClick={handleClearForm} className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Tabla de datos */}
        <div className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
          <h2 className="text-lg font-semibold mb-2">Lista de {selectedTable}</h2>
          <table className="table-container min-w-full bg-white border" style={{ whiteSpace: 'nowrap' }}>
            <thead>
              <tr>
                {/* Encabezados dinámicos */}
                {selectedTable === 'Compras' && (
                  <>
                    <th className="py-2">ID</th>
                    <th className="py-2">Fecha</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Cliente ID</th>
                    <th className="py-2">Acciones</th>
                  </>
                )}
                {selectedTable === 'Clientes' && (
                  <>
                    <th className="py-2">ID</th>
                    <th className="py-2">Nombre</th>
                    <th className="py-2">Apellidos</th>
                    <th className="py-2">Tipo de Usuario</th>
                    <th className="py-2">Dirección</th>
                    <th className="py-2">RFC</th>
                    <th className="py-2">Acciones</th>
                  </>
                )}
                {selectedTable === 'Libros' && (
                  <>
                    <th className="py-2">ISBN</th>
                    <th className="py-2">Título</th>
                    <th className="py-2">Autor</th>
                    <th className="py-2">Editorial</th>
                    <th className="py-2">Edición</th>
                    <th className="py-2">Descripción</th>
                    <th className="py-2">Precio</th>
                    <th className="py-2">Calificación</th>
                    <th className="py-2">Portada</th>
                    <th className="py-2">Unidades Disponibles</th>
                    <th className="py-2">Ubicación</th>
                    <th className="py-2">Género</th>
                    <th className="py-2">Acciones</th>
                  </>
                )}
                {selectedTable === 'Tickets' && (
                  <>
                    <th className="py-2">ID Ticket</th>
                    <th className="py-2">ID Compra</th>
                    <th className="py-2">ISBN</th>
                    <th className="py-2">Cantidad</th>
                    <th className="py-2">Precio de Venta</th>
                    <th className="py-2">Acciones</th>
                  </>
                )}
                {selectedTable === 'Usuarios' && (
                  <>
                    <th className="py-2">ID</th>
                    <th className="py-2">Nombre</th>
                    <th className="py-2">Apellidos</th>
                    <th className="py-2">Tipo de Usuario</th>
                    <th className="py-2">Descripción</th>
                    <th className="py-2">RFC</th>
                    <th className="py-2">Acciones</th>
                  </>
                )}
                {selectedTable === 'Ventas' && (
                  <>
                    <th className="py-2">ID Venta</th>
                    <th className="py-2">ID Usuario</th>
                    <th className="py-2">ISBN</th>
                    <th className="py-2">Fecha de Venta</th>
                    <th className="py-2">Cantidad Vendida</th>
                    <th className="py-2">Precio de Venta</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {/* Datos dinámicos */}
              {selectedTable === 'Compras' && compras.map(compra => (
                <tr key={compra.id}>
                  <td className="border px-4 py-2">{compra.id}</td>
                  <td className="border px-4 py-2">{compra.fecha}</td>
                  <td className="border px-4 py-2">{compra.total}</td>
                  <td className="border px-4 py-2">{compra.clienteId}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => { setEditMode(true); setSelectedItem(compra); setNewCompra(compra); }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
                    <button onClick={() => handleDeleteItem(compra.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {selectedTable === 'Clientes' && clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td className="border px-4 py-2">{cliente.id}</td>
                  <td className="border px-4 py-2">{cliente.nombre}</td>
                  <td className="border px-4 py-2">{cliente.apellidos}</td>
                  <td className="border px-4 py-2">{cliente.tipoUsuario}</td>
                  <td className="border px-4 py-2">{cliente.direccion}</td>
                  <td className="border px-4 py-2">{cliente.rfc}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => { setEditMode(true); setSelectedItem(cliente); setNewCliente(cliente); }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
                    <button onClick={() => handleDeleteItem(cliente.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {selectedTable === 'Libros' && libros.map(libro => (
                <tr key={libro.isbn}>
                  <td className="border px-4 py-2">{libro.isbn}</td>
                  <td className="border px-4 py-2">{libro.titulo}</td>
                  <td className="border px-4 py-2">{libro.autor}</td>
                  <td className="border px-4 py-2">{libro.editorial}</td>
                  <td className="border px-4 py-2">{libro.edicion}</td>
                  <td className="border px-4 py-2">{libro.descripcion}</td>
                  <td className="border px-4 py-2">{libro.precio}</td>
                  <td className="border px-4 py-2">{libro.calificacion}</td>
                  <td className="border px-4 py-2">{libro.portada}</td>
                  <td className="border px-4 py-2">{libro.unidades_disponibles}</td>
                  <td className="border px-4 py-2">{libro.ubicacion}</td>
                  <td className="border px-4 py-2">{libro.genero}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => { setEditMode(true); setSelectedItem(libro); setNewLibro(libro); }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
                    <button onClick={() => handleDeleteItem(libro.isbn)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {selectedTable === 'Tickets' && tickets.map(ticket => (
                <tr key={ticket.id_ticket}>
                  <td className="border px-4 py-2">{ticket.id_ticket}</td>
                  <td className="border px-4 py-2">{ticket.id_compra}</td>
                  <td className="border px-4 py-2">{ticket.isbn}</td>
                  <td className="border px-4 py-2">{ticket.cantidad}</td>
                  <td className="border px-4 py-2">{ticket.precio_venta}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => { setEditMode(true); setSelectedItem(ticket); setNewTicket(ticket); }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
                    <button onClick={() => handleDeleteItem(ticket.id_ticket)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {selectedTable === 'Usuarios' && usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td className="border px-4 py-2">{usuario.id}</td>
                  <td className="border px-4 py-2">{usuario.nombre}</td>
                  <td className="border px-4 py-2">{usuario.apellidos}</td>
                  <td className="border px-4 py-2">{usuario.tipo_usuario}</td>
                  <td className="border px-4 py-2">{usuario.descripcion}</td>
                  <td className="border px-4 py-2">{usuario.rfc}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => { setEditMode(true); setSelectedItem(usuario); setNewUsuario(usuario); }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
                    <button onClick={() => handleDeleteItem(usuario.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {selectedTable === 'Ventas' && ventas.map(venta => (
                <tr key={venta.id_venta}>
                  <td className="border px-4 py-2">{venta.id_venta}</td>
                  <td className="border px-4 py-2">{venta.id_usuario}</td>
                  <td className="border px-4 py-2">{venta.isbn}</td>
                  <td className="border px-4 py-2">{venta.fecha_venta}</td>
                  <td className="border px-4 py-2">{venta.cantidad_vendida}</td>
                  <td className="border px-4 py-2">{venta.precio_venta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CRUD;