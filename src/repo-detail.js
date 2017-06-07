import React from 'react';
import { Redirect } from 'react-router-dom';
import { bool, object } from 'prop-types';

const RepoDetail = (props) => {
    if (props.shouldRedirect) {
        return <Redirect to="/" />
    }
    return(
        <div className="row">
            <div className="medium-6 columns medium-centered">
                <h2 style={{marginLeft:'15px'}}>{props.repo.name} details</h2>                
                <table className="table" >
                    <thead>
                        <tr>
                            <th width="500">Stars</th>
                            <th width="500">Forks</th>
                            <th width="500">Primary Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.repo.stargazers_count}</td>
                            <td>{props.repo.forks_count}</td>
                            <td>{props.repo.language}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

RepoDetail.propTypes = {
    shouldRedirect: bool.isRequired,
    repo: object.isRequired
}

export default RepoDetail;