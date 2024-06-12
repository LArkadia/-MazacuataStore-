import React from 'react'
import { ListingBook } from './ListingBook'

export const ListeningBooks = (data) => {
    const books=data.data;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto"> 
       {books.map((el) => (
              <ListingBook data={el} />
            ))}
    </div>
  )
}
