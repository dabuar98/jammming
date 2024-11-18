import React from "react";
import Tracklist from "./Tracklist";
import "./SearchResults.css"

function SearchResults({ searchResults, onAdd }){
    return (
        <>
            <Tracklist tracks={searchResults} onAdd={onAdd}/>
        </>
    )
}

export default SearchResults;