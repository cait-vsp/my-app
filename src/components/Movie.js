import { useEffect, useState } from 'react';
import './movie.css';
import MovieCard from './MovieCard';

// API Key: c2e371f001d1b9bfd86c10cf2176de2c

export default function Movie (){


const [movieList, setMovieList] = useState([])

const getMovie = () => {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=c2e371f001d1b9bfd86c10cf2176de2c")
      .then(res => res.json())
      .then(json => setMovieList(json.results))
    }

    useEffect(() => {
      getMovie()
    }, []);


    console.log(movieList)



  return(
    <div className = "movie-container">
      {movieList.map((movie) => (
        <MovieCard
        key = {movie.id}
        title = {movie.title}
        poster_Path = {movie.poster_path}
        release_Date = {movie.release_date}
        rating = {movie.vote_average}/>
      ))}
    </div>
  );
}