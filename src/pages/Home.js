import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import BooksPanel from '../components/BooksPanel'


function Home() {

    const [query, setQuery] = useState("")



  return (
    <div className='flex flex-col justify-center'>
      <SearchBar updateList={setQuery}/>
      <BooksPanel searchQuery={query}/>

    </div>
  )
}

export default Home
