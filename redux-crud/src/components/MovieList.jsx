import React from 'react'
import { useSelector } from "react-redux"
import MovieInput from './MovieInput'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../movieSlice'

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch()
  const handleDeleteMovie = (id) => {
    console.log(movies)
    dispatch(removeMovie(id))
  }
  return (
    <div>
      <MovieInput/>
      {movies.map((movie) => 
        <div key={movie.id}>{movie.name} <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button></div>
      )}
    </div>
  )
}

export default MovieList
