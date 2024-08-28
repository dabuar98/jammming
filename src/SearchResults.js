import React from "react";
import Track from "./Track";

function SearchResults(){
    /* Should host a list of the tracks that matches the search results */
    return (
        <div style={{ width: '50%', height: '100%' }}>
            <Track  albumCover="../public/logo192.png" 
              trackName="Sample Track" 
              trackAuthor="Sample Author" 
              trackYear="Sample Year" />
        </div>
    )
}

export default SearchResults;