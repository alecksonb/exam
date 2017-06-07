import React, { Component } from 'react';
import { array, func} from 'prop-types';

class FilterRepo extends Component {
    state = {
        selectedLanguage: ''
    }

    handleChange = (event) => {
        this.setState({selectedLanguage: event.target.value});
        this.props.onChangeFilter(event.target.value);
    }

    render() {
        const options = this.props.languages.map((language) => {
            return (
                <option key={language} value={language}>{language}</option>
            )
        })
        return(
            <div className="row">
                <div className="medium-6 columns medium-centered">
                    <label>Filter repos by primary language</label>
                    <select value={this.state.selectedLanguage} onChange={this.handleChange}>
                        <option value=''>All</option>
                        {options}
                    </select>
                </div>
            </div>
        )
    }
}

FilterRepo.propTypes = {
    languages: array.isRequired,
    onChangeFilter: func.isRequired
}

export default FilterRepo;