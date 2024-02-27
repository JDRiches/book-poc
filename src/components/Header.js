import React from 'react'

function Header() {
  return (
    <div className='flex flex-row bg-slate-200 p-5'>
        <div className='items-center w-1/2'>
            <h1 className="text-3xl font-bold underline">Book App</h1>
        </div>
        <div className='flex flex-row-reverse items-center w-1/2 gap-x-5'>
            <p>Friends</p>
            <p>Collections</p>
            <p>Books</p>
        </div>
    </div>
  )
}

export default Header
