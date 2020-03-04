import React from 'react';
import PropTypes from 'prop-types';

 const RepoItem = ({repo}) => {
    return (
        <div class='card'>
            <h3>
                <a href ={repo.html_url}>{repo.name}</a>
            </h3>
            
        </div>
    )
}
RepoItem.propTypes={
    repo:PropTypes.array.isRequired
}

export default RepoItem;