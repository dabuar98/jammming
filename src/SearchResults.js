import React from "react";
import Track from "./Track";
import "./SearchResults.css"

function SearchResults({ tracks }){
    return (
        //albumCover, trackName, trackAuthor, trackAlbum, trackYear
        <>
            {tracks.map((track, index) => (
                <Track
                    key = {index}
                    albumCover = {track.cover}
                    trackName = {track.title}
                    trackAuthor = {track.author}
                    trackAlbum ={track.album}
                    trackYear = {track.year}
                />
            ))}

        </>
    )
}

export default SearchResults;