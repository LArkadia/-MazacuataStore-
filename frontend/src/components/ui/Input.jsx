import React from 'react'

export function Input(props) {
  return (
    <input 
    type="text" 
    className="mb-2 bg-white px-3 py-2 block my-2 w-full rounded-lg italic text-gray-500 border border-gray-500"
    {...props}
    />
  )
}

export default Input;