import React from 'react';

const FilterRepo = () => {
    return(
        <div className="row">
            <div className="medium-6 columns medium-centered">
                <label>Filter repos by primary language</label>
                <select>
                    <option>All</option>
                    <option>JavaScript</option>
                    <option>HTML</option>
                    <option>Ruby</option>
                </select>
            </div>
        </div>
    )
}

export default FilterRepo;