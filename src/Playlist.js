import React, { useState } from "react";
import "./Playlist.css"

function Playlist({ playlistName, playlistTracks, onNameChange }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The form has been submitted with playlist name: ${playlistName}`);
        onNameChange("");
    }

    return (
        <div className="playlist">
        
            <form className="playlist-form" onSubmit={handleSubmit}>
                <input  value={playlistName} 
                        placeholder="Name your playlist" 
                        onChange={({ target }) => onNameChange(target.value)}/>
                <button className="add-playlist">Add</button>
            </form>

        </div>
    )
}

export default Playlist;