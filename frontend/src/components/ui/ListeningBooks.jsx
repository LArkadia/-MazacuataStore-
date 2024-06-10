import React from 'react'
import { ListingBook } from './ListingBook'

export const ListeningBooks = (data) => {
  return (
    <section className="mt-8">
        {
            data.map((element)=>{
                <ListingBook content={element}/>
            })
        }
    </section>
  )
}
