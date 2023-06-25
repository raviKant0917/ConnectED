import React, { useState } from "react";
import "./Search.scss";

const Search = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className="searchbar">
            <div className="search">
                <input
                    type="text"
                    placeholder="&#x1F50E; Search"
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <button type="submit">Submit</button>
            </div>
            {focus && <div id="autocomplete"></div>}
        </div>
    );
};

export default Search;
