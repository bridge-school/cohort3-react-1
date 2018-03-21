import React from 'react';

export const SearchBar = ({ handleInputChange, query}) => {
    return (
        // <div className="search-bar">
        //     <input type="text" placeholder="Search..."/>
        //     <button type="submit">Submit</button>
        // </div>
        <form>
            <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.state.handleInputChange}
            />
            <p>{this.state.query}</p>
        </form>
    )
};