import React from 'react'
import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <input 
      type="text" 
      className="mb-2 bg-white px-3 py-2 block my-2 w-full rounded-lg italic text-gray-500 border border-gray-500"
      ref={ref}
      {...props}
    />
  )
})

export default Input;