import React from 'react';

const User = ( { user } ) => (
    <a href={user.html_url} target='_blank'>
        <div>
            <div> {user.login} </div>
        </div>
        <img src={user.avatar_url} height="100px" width="100px"/>

    </a>
);

export default User;