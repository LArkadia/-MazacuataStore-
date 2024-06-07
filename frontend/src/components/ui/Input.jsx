import React from 'react'

export function Input(props) {
  return (
    <input type="text" 
    className="mb-2 bg-white px-2 py-1 rounded-lg italic text-gray-500 border border-gray-500"
    {...props}
    />
  )
}

export default Input;