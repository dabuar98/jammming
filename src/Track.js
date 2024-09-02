import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Track.css'

function Track({ albumCover, trackName, trackAuthor, trackAlbum, trackYear }){

    const handleClick = () => {
        console.log("Add button clicked");
    }

    return (
        <div className="track">
            <img src={albumCover} alt="Album Cover" />
            <div className="track-info">
                <p>{trackName}</p>
                <p>{trackAlbum}</p>
                <p>{trackAuthor}</p>
                <p>{trackYear}</p>
            </div>
            <button className="add-button" onClick={handleClick}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
}

export default Track;