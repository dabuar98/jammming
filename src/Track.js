import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Track.css'

function Track({ track }){
    
    const addTrack = () => {
        console.log("The add button was pressed!")
    }

    return (
        <div className="track">
            <img src={track.albumArtUrl} alt="Album Cover" />
            <div className="track-info">
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            <button className="add-button" onClick={addTrack}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
}

export default Track;