import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchChange }) => {
    return(
        <div className="pa2 ma2">
            <h1 className="f1">Robofriends</h1>
            <input 
            className="pa3 ba b--light-green bg-lightest-blue"
            type="search"
            placeholder="search robots"
            onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBar;