import React from "react";
import Track from "./Track";

function SearchResults(){
    return (
        <div className="search-results">
            <Track  albumCover="../public/logo192.png" 
              trackName="Sample Track" 
              trackAuthor="Sample Author" 
              trackAlbum="Sample Album"
              trackYear="Sample Year" />
        </div>
    )
}

export default SearchResults;