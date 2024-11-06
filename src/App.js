import React, { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import mockSearchResults from './mockSearchResults.json'
import mockData from './mockData.json'

function App() {

  // Keep track of the playlist names and the playlists tracks
  const [playlistName, setPlaylistName] = useState(mockData.playlistName);
  const [playlistTracks, setPlaylistTracks] = useState(mockData.playlistTracks);

  // Keep track of the search results
  const [searchResults, setSearchResults] = useState(mockData.playlistTracks);

  // Handler to update playlist name
  const handleNameChange = (name) => setPlaylistName(name);

  // Handler to add a track to the playlist
  // const addTrack = (track) => {
  //   if(!playlistTracks.find((t) => t.id === track.id)) {
  //     setPlaylistTracks([...playlistTracks, track]);
  //   }
  //};

  return ( 
      <div className="container">

        <header>
            <h1>Jammming with <FontAwesomeIcon icon={faSpotify} className='spotify-icon'/> Spotify</h1>
            <p>Search your favourite track, craft a playlist and save it to your Spotify account</p>
        </header>
      
        <SearchBar />

        <div className='content'>

          <div className='search-results'>
            <h2>Search Results</h2>
            <SearchResults searchResults={searchResults}/>
          </div>

          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={handleNameChange}
          />

        </div>

      </div>
  );
}

export default App;
