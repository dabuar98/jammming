import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Track.css'

function Track({ track, onAdd,onRemove }){

    const handleAdd = () => onAdd(track);
    const handleRemove = () => onRemove(track);

    return (
        <div className="track">
            <img src={track.albumArtUrl} alt="Album Cover" />
            <div className="track-info">
                <p className='track-name'>{track.name}</p>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            {onAdd && <button className="add-button" onClick={handleAdd}><FontAwesomeIcon icon={faPlus}/></button>}
            {onRemove && <button className="remove-button" onClick={handleRemove}><FontAwesomeIcon icon={faMinus}/></button>}
            
        </div>
    );
}

export default Track;