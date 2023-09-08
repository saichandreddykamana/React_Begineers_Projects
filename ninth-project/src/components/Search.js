import React from "react";
import '../style/Search.css';

const Search = () => {
    return (
        <div className="Search">
            <form className="Search--form">
                <input type="text" className="Search--input" placeholder="Enter Pokeman Name..." />
                <button type="button" className="Search--button"> Search</button>
            </form>
        </div>
    )
}

export default Search;