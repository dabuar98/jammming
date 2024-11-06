import React from "react";
import Tracklist from "./Tracklist";
import "./SearchResults.css"

function SearchResults({ searchResults }){
    return (
        <>
            <Tracklist tracks={searchResults}/>
        </>
    )
}

export default SearchResults;