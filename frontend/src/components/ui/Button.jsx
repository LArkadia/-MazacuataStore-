import React from 'react'

export function Button({children}) {
  return (
   <button
    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500
    px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 
    disabled:oppacity-50 disabled:cursos-not-allowed"
  >
    {children}
  </button>
  )
}

export default Button