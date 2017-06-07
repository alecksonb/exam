import React, { Component }from 'react';
import { func } from 'prop-types';

class Search extends Component {
    state = {
        username: '',
        error: null
    }
    handleChange = (event) => {
        this.setState({
            username: event.target.value,
            error: null
        });
        this.props.newSearch();
    }
    handleSubmit = (event) => {
        this.props.onSubmit(this.state.username)
            .then(() => {
                this.setState({ username: '', error: null })
            })
            .catch(() => {
                this.setState({
                    error: 'Unknown username!'
                })
            })
    }
    render() {
        let potentialError = null;
        if (this.state.error) {
            potentialError = <p className="notification-box alert">{this.state.error}</p>
        }
        return(
            <div className="row">
                <div className="medium-6 columns medium-centered">             
                    {potentialError}
                    <div className="">
                        <label>Search repositories by username</label>
                        <input type="search" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="expand" onClick={this.handleSubmit} disabled={this.state.username === ''}>Search</button>
                    </div>            
                    <hr/>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    onSubmit: func.isRequired,
    newSearch: func.isRequired
}

export default Search;