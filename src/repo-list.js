import React, { Component } from 'react';
import { array, string } from 'prop-types';
import { Link } from 'react-router-dom';
import FilterRepos from './filter-repos';

class RepoList extends Component {
    state = {
        languageFilter: ''
    }
    handleFilterChange = (filterValue) => {
        this.setState({languageFilter: filterValue})
        return this.props.repos.filter((repo) => {
            return (repo.language === filterValue)
        })
    }
    render() {
        
        const filterrepos = this.props.repos.filter( (value) => {
            return (this.state.languageFilter === '' || value.language === this.state.languageFilter)
        })
        const tableRows = filterrepos.map((repo) => {
            return (
                <tr key={repo.id}>
                    <td><Link to={`/repoDetail/${repo.name}`}>{repo.name}</Link></td>
                </tr>
            )
        })
        const results = this.props.repos.reduce((accum = {}, repoObj) => {
                            const language = repoObj.language;
                            if(language !== null)
                                accum[language] = language;
                            return accum;
                        }, {});
        const languages = Object.keys(results);
        return (
            <div className="row">
                <div className="medium-7 columns medium-centered">
                <h2>{this.props.username}'s repositories</h2>
                <FilterRepos languages={languages} onChangeFilter={this.handleFilterChange}/>
                <table className="table" >
                    <thead>
                        <tr>
                            <th width="500">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

RepoList.propTypes = {
    repos: array.isRequired,
    username: string.isRequired
}

export default RepoList;