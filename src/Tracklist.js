import React, { useState } from "react";
import Track from "./Track";
import "./Tracklist.css";

function Tracklist() {
    const [playlistName, setPlaylistName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The form has been submitted with playlist name: ${playlistName}`);
        setPlaylistName("");
    }

    return (
        <div className="playlist">
            <Track  albumCover="../public/logo192.png" 
                trackName="Sample Track" 
                trackAuthor="Sample Author" 
                trackAlbum="Sample Album"
                trackYear="Sample Year" />
        
            <form className="playlist-name" onSubmit={handleSubmit}>
                <input  value={playlistName} 
                        placeholder="Name your playlist" 
                        onChange={({ target }) => setPlaylistName(target.value)}/>
                <button className="add-playlist">Add</button>
            </form>

        </div>
    )
}

export default Tracklist;