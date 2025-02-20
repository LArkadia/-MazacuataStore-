import { Link } from "react-router-dom";
import React from 'react'
import Card from "./Card";

export const NotFoundComponent = ({msg="Page Not Found"}) => {
  console.log(msg)
  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
        <Card>
            <h1 className="text-4xl font-bold my-2">{msg}</h1>
            <h3 className="text-2xl">404</h3>

            <Link to="/">Regresar al inicio</Link>
        </Card>
    </div>
  )
}
