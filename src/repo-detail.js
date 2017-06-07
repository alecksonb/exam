import React from 'react';

const RepoHome = () => {
    return(
        <div className="row">
            <div className="medium-6 columns medium-centered">
                <h2 style={{marginLeft:'15px'}}>repo_name details</h2>                
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
                            <td>32</td>
                            <td>6</td>
                            <td>JavaScript</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RepoHome;