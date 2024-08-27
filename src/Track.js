import React, { Component } from "react";
import './Track.css'

class Track extends Component {
    render() {
        const { albumCover, trackName, trackAuthor, trackYear } = this.props;

        const handleClick = () => {
            console.log("Test Button clicked");
        }

        return (
            <div className="track">
                <div className="album-cover">
                    <img src={albumCover} alt="Album Cover" />
                </div>
                <div className="track-info">
                    <p className="track-name">{trackName}</p>
                    <p className="track-author">{trackAuthor}</p>
                    <p className="track-year">{trackYear}</p>
                </div>
                <div>
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default Track;