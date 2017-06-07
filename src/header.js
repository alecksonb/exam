import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

const Header = (props) => {
    let homeButton = (props.showHome) 
                ? (
                    <div className="medium-2 columns">
                        <Link to={`/`}><button>Home</button></Link>
                    </div>
                    )
                : null;
    return(
        <div className="row">
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