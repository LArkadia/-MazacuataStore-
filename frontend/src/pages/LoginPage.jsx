import { Card, Input, Button, Label } from "../components/ui";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [goBackHome,setgoBackHome]=useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', data);
      if (res.data.body) {
        localStorage.setItem("email",data.email);
        localStorage.setItem("token", res.data.body);
        alert("Loggin completado con exito");
        setgoBackHome(true);
      } else {
        console.log('No se recibió un token en la respuesta.');
      }
    } catch (error) {
      alert("Upps,Ocurrio un error")
      console.error('Error al realizar la solicitud:', error);
    }
  });
  if(localStorage.getItem("email")!=null && localStorage.getItem("token")!=null){
    alert("Usuario loggeado");
    return <Navigate to={"../"}/>
  }
  if(goBackHome) return <Navigate to={"../"}/>
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className='text-4xl font-bold my-2 text-center'>Inicia sesión</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label> 
          <Input type='email' 
            placeholder='E-mail'
            {...register('email', {
              required: true
            })}
          />
          <Label htmlFor="password">Contraseña</Label>
          <Input type='password' 
            placeholder='Contraseña'
            {...register('password',{
              required: true
            })}
          />
          <Button type="submit">
            Ingresa
          </Button>
          <div className="flex justify-between my-4">
            <p>¿No tienes una cuenta?</p>
            <Link to="/register" className="font-bold">
              Crea una aquí
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default LoginPage;
