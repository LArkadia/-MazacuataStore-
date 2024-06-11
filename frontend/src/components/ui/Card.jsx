import React from 'react'

export function Card({children}) {
  return (
    <div className="bg-zinc-200 p-10 rounded-mds">
        {children}
    </div>
  )
}

export default Card