import React, { useState } from "react";
import "./Playlist.css"
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave();
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

            <h3>{playlistName}</h3>

            {playlistTracks.length === 0 ? (
                <p>Your playlist is empty. Click "+" to add some tracks!</p>
            ): (
                <Tracklist tracks={playlistTracks} onRemove={onRemove} />
            )}

        </div>
    )
}

export default Playlist;