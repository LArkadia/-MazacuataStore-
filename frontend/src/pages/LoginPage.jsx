import React from 'react'
import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await axios.post('http://localhost:4000/api/users', data)
    console.log(res)
  });

  return (
    <div className="h-[cal c(100vh-64px)] flex items-center justify-center">
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
          <Button>
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
  )
}
export default LoginPage