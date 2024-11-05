import React from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import Tracklist from './Tracklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import data from './dummyData.json'

function App() {
  return ( 
      <div className="container">

        <header>
            <h1>Jammming with <FontAwesomeIcon icon={faSpotify} className='spotify-icon'/> Spotify</h1>
            <p>Search your favourite track, craft a playlist and save it to your Spotify account</p>
        </header>
      
        <SearchBar />

        <div className='content'>

          <div className='search-list'>
            <SearchResults tracks={data.tracks} className="search-results"/>
          </div>

          <Tracklist/>

        </div>

      </div>
  );
}

export default App;
