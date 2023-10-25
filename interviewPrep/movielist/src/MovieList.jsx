import { useEffect } from "react"
import { useState } from "react"
import "./movielist.css"


const MovieList =   function () {
    const [list, setlist] = useState()
    useEffect(() =>{
        const fecthData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let movies = await response.json()
            setlist(movies)
        }

        fecthData()
    },[])
       
       console.log(list)
    
  return (
    <div>
      <div className='container'>
        <ul className="movieList">
            {
                list.map((l)=> (
                    <li  className="listItem" key={l.id}>{l.title}</li>
                ))
            }
        </ul>
      </div>
      <button className="filter">Filter</button>
    </div>
  )
}

export default MovieList