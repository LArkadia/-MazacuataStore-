import {Input} from '../components/ui/Input'
import { Card } from "../components/ui/Card";

function RegisterPage() {
  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
      <Card>
        <h3 className="text-2xl font-bold">Crea tu cuenta</h3>
        <form>
          <Input placeholder="Ingresa tu nombre"/>
          <Input placeholder="Ingresa tu apellido"/>
          <Input placeholder="Ingresa tu dirección"/>
          <button>
            Registrate
          </button>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage