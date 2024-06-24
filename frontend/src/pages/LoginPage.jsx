import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', data);
      console.log(res.data);
      if (res.data.body) {
        console.log('Token:', res.data.body);
      } else {
        console.log('No se recibió un token en la respuesta.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  });

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
