import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'
import { Settings } from '../../common/settings'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies,
    renderShows = ''

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, i) => <MovieCard key={i} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    )

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, i) => <MovieCard key={i} data={show} />)
    ) : (
      <div className="shows-error">
        <h3>{movies.error}</h3>
      </div>
    )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing
