import React, { useState } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [focus, setFocus] = useState(false);
    const navigate = useNavigate();
    const submitHandler = ()=>{
        navigate("/search")
    }
    return (
        <div className="searchbar">
            <div className="search">
                <input
                    type="text"
                    placeholder="&#x1F50E; Search"
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <button type="submit" onClick={submitHandler}>Submit</button>
            </div>
            {focus && <div id="autocomplete"></div>}
        </div>
    );
};

export default Search;
