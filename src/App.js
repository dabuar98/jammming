import React from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import Tracklist from './Tracklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  return (
  
      <div className="container">

        <header>
            <h1>Jammming with <FontAwesomeIcon icon={faSpotify} className='spotify-icon'/> Spotify</h1>
            <p>Search your favourite track, craft a playlist and save it to your Spotify account</p>
        </header>
      
        <SearchBar />

        <div className='content'>
          <SearchResults className="search-results"/>
          <Tracklist className="tracklist"/>
        </div>

      </div>
  );
}

export default App;
