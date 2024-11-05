import React, { useState } from "react";
import "./Playlist.css"

function Playlist({ playlistName, playlistTracks, onNameChange, handleNameChange }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The form has been submitted with playlist name: ${playlistName}`);
        handleNameChange("");
    }

    return (
        <div className="playlist">
        
            <form className="playlist-name" onSubmit={handleSubmit}>
                <input  value={playlistName} 
                        placeholder="Name your playlist" 
                        onChange={({ target }) => onNameChange(target.value)}/>
                <button className="add-playlist">Add</button>
            </form>

        </div>
    )
}

export default Playlist;