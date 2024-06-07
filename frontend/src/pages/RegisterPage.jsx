import {Input} from '../components/ui/Input'

function RegisterPage() {
  return (
    <div>
       <h3 className="text-2xl font-bold">Crea tu cuenta</h3>
      <form>
        <Input placeholder="Ingresa tu nombre"/>
        <input type="text" placeholder="Ingresa tu apellido"/>
        <input type="text" placeholder="Ingresa tu dirección"/>
        <input type="email" placeholder="Ingresa tu correo eléctronico"/>
        <input type="password" placeholder="Ingresa tu constraseña"/>
        <button>
          Registrate
        </button>
      </form>
    </div>
  )
}

export default RegisterPage