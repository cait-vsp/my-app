import React from 'react';
import Movie from './components/Movie';
import Header from './components/Header';

// API Key: c2e371f001d1b9bfd86c10cf2176de2c

export default function App (){
  return(

    // Order: Title, Header, Search Bar, Dropdown Sort, Movie, Footer
    <div>
      
      <div class = "title">
        <h1 id = "Title">Movie Explorer</h1>
      </div>
      <Header/>
      <Movie/>
    </div>
  );
}