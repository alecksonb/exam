import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

const Header = (props) => {
    let homeButton = null;
    if(props.showHome)
        homeButton = (<div className="medium-2 columns"><Link to={`/`}>
                <button>Home</button></Link>
            </div>);
    return(
        <div className="row">
            <div className="medium-1 columns">
            </div>
            <div className="medium-5 columns">
                <h1>Github viewer</h1>
            </div>
            {homeButton}            
            <hr/>
        </div>
    )
}

Header.propTypes = {
    showHome: bool.isRequired
}

export default Header;