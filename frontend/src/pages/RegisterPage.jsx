import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";
const ownToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsImVtYWlsIjoiaWxvdmVwYXBlcjJAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk1NDQzMTJ9.IsanEamQRWitFecYMt75qdxQt4HBVUu2FhoNo4kB5BA";
function RegisterPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm();
  const [goLogin,setGoLogin]=useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try{
      data["tipo_usuario"]="activo";
      data["id"]=0;
    const res = await  axios.post('http://localhost:4000/api/clients', data, {
      headers:{
        "Authorization":"Bearer "+ownToken,
      },
    });
    setGoLogin(true);
    alert("Todo salió correcto");
    }catch(err){
      console.log(err);
      alert("Ocurrio un error");
    }
  });
  if(localStorage.getItem('email')!=null && localStorage.getItem('token')!=null) return <Navigate to={"../"}/>;
  if(goLogin) return <Navigate to={"../login"}/>; 
  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
      <Card>
        <h3 className="text-2xl font-bold">Crea tu cuenta</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="nombre">
            Nombre
          </Label>
          <Input 
            placeholder="Ingresa tu nombre"
            {...register('nombre', {
              required: true})}
          />
          {
            errors.nombre && <p className="text-red-500">Escribe tu nombre</p>
          }
          <Label htmlFor="apellidos">
            Apellidos
          </Label>
          <Input 
            placeholder="Ingresa tus apellidos"
            {...register('apellidos', {
              required: true})}
          />
          {
            errors.apellidos && <p className="text-red-500">Escribe tu apellido</p>
          }
          <Label htmlFor="rfc">
            Rfc
          </Label>
          <Input 
            placeholder="Ingresa tu rfc"
            {...register('rfc', {
              required: true})}
          />
          {
            errors.rfc && <p className="text-red-500">Escribe tu nombre</p>
          }
          <Label htmlFor="direccion">
            Dirección
          </Label>
          <Input 
            placeholder="Ingresa tu dirección"
            {...register('direccion', {
              required: true})}
          />
          {
            errors.address && <p className="text-red-500">Escribe tu dirección</p>
          }
          <Label htmlFor="email">
            E-mail
          </Label>
          <Input
            type="email" 
            placeholder="Ingresa tu e-mail"
            {...register('email', {
              required: true
            })}
          />
          {
            errors.email && <p className="text-red-500">Escribe tu e-mail</p>
          }
          <Label htmlFor="password">
            Contraseña
          </Label>
          <Input 
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register('password', {
              required: true})}
          />
          {
            errors.password && <p className="text-red-500">Escribe tu contraseña</p>
          }
          <Button>
            Registrate
          </Button>
          <div className="flex justify-between my-4">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className="font-bold">
              Inicia sesión aquí
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage