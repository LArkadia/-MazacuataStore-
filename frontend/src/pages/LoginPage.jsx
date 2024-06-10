import React from 'react'
import { Card, Input, Button } from "../components/ui";

function LoginPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className='text-4xl font-bold my-2 text-center'>Inicia Sesión</h1>
        <form>
          <Input type='email' placeholder='E-mail'/>
          <Input type='password' placeholder='Contraseña'/>
          <Button>
            Entra
          </Button>
        </form>
      </Card>
    </div>
  )
}
export default LoginPage