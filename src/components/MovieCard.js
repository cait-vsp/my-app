import React from 'react';
import './movie.css';

export default function MovieCard(props){
    return(
        <div className="movie-card">
            <img
            src={`https://image.tmdb.org/t/p/w500${props.poster_Path}`} 
            alt={props.title}/> 
            <h2>{props.title}</h2>
            <p>Release Date: {props.release_Date}</p>
            <p>Rating: {props.rating}</p>
        </div>
    );
}