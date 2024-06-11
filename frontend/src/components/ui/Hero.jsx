import React from 'react'

export const Hero = () => {
  return (
   <div className=" py-20  bg-gray-400 p-5 text-center " style={{fontSize:25, fontWeight:'inherit', color:'white'}}>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Bienvenido Mazacliente
          </h1>
          <p className='my-4 text-xl text-white'>Ponte a Comprar</p>
        </div>
      </div>
  </div>
  )
}
