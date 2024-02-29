import React, {useState, useEffect} from 'react'


function SearchBar({updateList}) {

    const [query, setQuery] = useState("")

    useEffect(() => {
        const timeOutId = setTimeout(() => {updateList(query)},1000);
        return () => clearTimeout(timeOutId)
    }, [query])

  return (
    <div className='flex flex-row-reverse p-5 gap-5'>
        <input onChange={(event) => {setQuery(event.target.value)}} type='text'/>
        <h1>Search for Books!</h1>
    </div>
  )
}

export default SearchBar
