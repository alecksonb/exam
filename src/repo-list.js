import React from 'react';
import FilterRepos from './filter-repos';

const UserList = () => {
    return (
        <div className="row">
            <div className="medium-7 columns medium-centered">
            <h2>alecksonb's repositories</h2>
            <FilterRepos />
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gameServer</td>
                    </tr>
                    <tr>
                        <td>thinking-in-react</td>
                    </tr>
                    <tr>
                        <td>YoutubeBinge</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default UserList;