import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";
import  axios  from "axios";

function RegisterPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('http://localhost:4000/api/users', data, {
      withCredentials: true
    })
    console.log(res)
  });

  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
      <Card>
        <h3 className="text-2xl font-bold">Crea tu cuenta</h3>
        <form onSubmit={onSubmit}>
          <Input 
            placeholder="Ingresa tu nombre"
            {...register('nombre', {
              required: true})}
          />
          {
            errors.nombre && <p className="text-red-500">Escribe tu nombre</p>
          }
          <Input 
            placeholder="Ingresa tus apellidos"
            {...register('apellidos', {
              required: true})}
          />
          {
            errors.apellidos && <p className="text-red-500">Escribe tu apellido</p>
          }
          <Input 
            placeholder="Ingresa tu dirección"
            {...register('direccion', {
              required: true})}
          />
          {
            errors.address && <p className="text-red-500">Escribe tu dirección</p>
          }
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
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage