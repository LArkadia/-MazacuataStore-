function RegisterPage() {
  return (
    <div>
      <h3 className="text-2xl font-bold">Register</h3>

      <form>
        <input type="text" placeholder="Ingresa tu nombre"
          className="mb-2 bg-zinc-500 px-2 py-1 rounded-sm"
        />
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