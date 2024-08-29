import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

function SearchBar () {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The form has been submitted with search word: ${search}`);
        setSearch("");
    }

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input  value={search} 
                    onChange={({ target }) => setSearch(target.value)}
                    placeholder="Search"></input>
            <button type="submit"><FontAwesomeIcon className="search-icon" icon={faSearch}/></button>
        </form>
    )
}

export default SearchBar;