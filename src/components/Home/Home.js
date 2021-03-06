import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieListing from '../MovieListing/MovieListing'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Water'
  const showText = 'Malcolm'

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  )
}

export default Home
