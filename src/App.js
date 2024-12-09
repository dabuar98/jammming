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
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState(mockData.playlistTracks);

  // Keep track of the search results
  const [searchResults, setSearchResults] = useState(mockSearchResults);

  // Handler to add a track to the playlist
  const addTrack = (track) => {
    if(!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // Handler to remove a track from the playlist
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((savedTrack) => savedTrack.id !== track.id));
  }

  // Handler to save playlist
  const savePlaylist = () => {
    
    // Extract URIs from playlistTracks
    const trackUris = playlistTracks.map((track) => track.uri);

    // Save to Spotify
    console.log(`Saving playlist ${playlistName}`);
    console.log(`Tracks:`, trackUris);

    // Reset playlist
    setPlaylistName("");
    setPlaylistTracks([]);
  }

  return ( 
      <div className="container">

        <header>
            <h1>Jammming with <FontAwesomeIcon icon={faSpotify} className='spotify-icon'/> Spotify</h1>
            <p>Search your favourite track, craft a playlist and save it to your Spotify account</p>
        </header>
      
        <SearchBar />

        <div className='content'>

          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack}/>
          
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove = {removeTrack}
            onNameChange={setPlaylistName}
            onSave={savePlaylist}
          />

        </div>

      </div>
  );
}

export default App;
