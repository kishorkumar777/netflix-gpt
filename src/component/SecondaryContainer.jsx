import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies);
  return (movies && (
    <div className='bg-black text-white'>
      <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularVideo}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedVideo}/>
      <MovieList title={"Upcoming"} movies={movies.upComingVideo}/>
    </div>
    </div>
  ))
}

export default SecondaryContainer