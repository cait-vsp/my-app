import React from 'react';
import './header.css';
import './SearchBar';
import SearchBar from './SearchBar';
// API Key: c2e371f001d1b9bfd86c10cf2176de2c

export default function Header (){

  return(
    <div className = "header">
    <SearchBar/>
    </div>
  );
}