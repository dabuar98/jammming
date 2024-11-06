import React, { useState } from "react";
import Track from "./Track";
import "./Tracklist.css";

function Tracklist({ tracks }) {
    return (
        <div className="tracklist">
            {tracks.map((track)=>{
                <Track key={track.id} track={track}/>
            })}
        </div>
    )
}

export default Tracklist;