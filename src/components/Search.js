import React from "react";
import "./nav.css";
function Search(){
    return(
        <div className="searchbtn">    
        <input name="search" placeholder="What is on your mind today" />
        <div className="searchicon"><i class="fas fa-search"></i></div>
        <button>Search</button>
        </div>
    );
}
export default Search;