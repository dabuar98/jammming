import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Track.css'

function Track({ track,onAdd }){

    return (
        <div className="track">
            <img src={track.albumArtUrl} alt="Album Cover" />
            <div className="track-info">
                <p className='track-name'>{track.name}</p>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            <button className="add-button" onClick={()=>onAdd(track)}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
}

export default Track;