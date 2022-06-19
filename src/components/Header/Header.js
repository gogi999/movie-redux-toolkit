import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import user from '../../images/user.png'
import logo from '../../images/logo.svg'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice'
import './Header.scss'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    if (term === '') return alert('Plese enter the search term!')

    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="movie-logo" />
          </Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="Search Movies or Shows"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  )
}

export default Header
