import React, { useState } from "react";
import './SearchBar.css'

function SearchBar () {
    const [search, stateSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The form has been submitted with search word ${search}`)
    }

    return(
        <form onSubmit={handleSubmit} >
            <input value={search} onChange={stateSearch(({ target }) => target.value)}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;