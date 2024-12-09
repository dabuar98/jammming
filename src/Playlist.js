import React, { useState } from "react";
import "./Playlist.css"
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The form has been submitted with playlist name: ${playlistName}`);
        onNameChange("");
    }

    return (
    
        <div className="playlist">
            <h2>Build your playlist!</h2>
            <form className="playlist-form" onSubmit={handleSubmit}>
                <input  value={playlistName} 
                        placeholder="Name your playlist" 
                        onChange={({ target }) => onNameChange(target.value)}/>
                <button className="add-playlist">Add</button>
            </form>

            {playlistTracks.length === 0 ? (
                <p>Your playlist is empty. Click "+" to add some tracks!</p>
            ): (
                <Tracklist tracks={playlistTracks} onRemove={onRemove} />
            )}

        </div>
    )
}

export default Playlist;