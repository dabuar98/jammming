import React, { Component, useState } from "react";
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        const [search, stateSearch] = useState("");
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`The form has been submitted with search word ${search}`)
        }
        <form onSubmit={handleSubmit} >
            <input value={search} onChange={stateSearch(({ target }) => target.value)}></input>
            <button type="submit">Search</button>
        </form>
    }
}
