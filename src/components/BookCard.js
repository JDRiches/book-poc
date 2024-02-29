import React from 'react'

function BookCard({title, image, author}) {
  return (
    <div className='bg-white rounded-md p-5 col-span-1 shadow-md w-60 flex flex-col h-80'>
        <div className='h-full w-full justify-center'>
            <img src={image} className='object-cover rounded-md m-auto'/>
        </div>
        <div className='align-text-baseline'>
            <h1 className='font-bold'>{title}</h1>
            <h2>{author}</h2>
        </div>
    </div>
  )
}

export default BookCard
