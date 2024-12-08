import React from "react";
import Tracklist from "./Tracklist";
import "./SearchResults.css"

function SearchResults({ searchResults, onAdd }){
    return (
        <div className='search-results'>
            <h2>Search Results</h2>
            <Tracklist tracks={searchResults} onAdd={onAdd}/>
        </div>
    )
}

export default SearchResults;