import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import BookCard from './BookCard'

function BooksPanel({searchQuery}) {


  const [books, setBooks] = useState([])


    useEffect(()=>{
        if(searchQuery != ""){
          console.log(searchQuery)
          axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery.replace(/ /g,"+"))
          .then(res =>{
            console.log(res.data)
            setBooks(res.data.items)    
       })
    }
    }, [searchQuery])

  return (
    <div className='m-24 rounded-md grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center'>
      {books.map((book) => {
        const imageLink = "imageLinks" in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        return <BookCard title={book.volumeInfo.title} image={imageLink}/>
      })}
    </div>
  )
}

export default BooksPanel
