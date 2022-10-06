import React from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name, email, username, phone} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small><Link to={`/friend/${id}`}>{username}</Link></small></p>
            <p>Phone: {phone}</p>

        </div>
    );
};

export default Friend;