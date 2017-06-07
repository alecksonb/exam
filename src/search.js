import React from 'react';

const Search = () => {
    return(
        <div className="row">
            <div className="medium-6 columns medium-centered">
            <form>
                <div className="notification-box alert">
                    Unknown username!
                </div>
                <div className="">
                    <label>Search repositories by username</label>
                    <input type="search" placeholder="username"/>
                </div>
                <div>
                    <button className="expand">Search</button>
                </div>            
                <hr/>
            </form>
            </div>
        </div>
    )
}

export default Search;