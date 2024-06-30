// validations.js

export const validateNombre = (nombre) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre);
  };
  
  export const validateApellidos = (apellidos) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(apellidos);
  };
  
  export const validateDireccion = (direccion) => {
    return direccion.length <= 255;
  };
  
  export const validateRFC = (rfc) => {
    const regex = /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/;
    return regex.test(rfc);
  };
  