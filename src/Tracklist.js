import React from "react";
import Track from "./Track";
import "./Tracklist.css";

function Tracklist({ tracks, onAdd }) {
    return (
        <div className="tracklist">
            {tracks.map((track)=> 
                <Track key={track.id} track={track} onAdd={onAdd}/>
            )}
        </div>
    )
}

export default Tracklist;