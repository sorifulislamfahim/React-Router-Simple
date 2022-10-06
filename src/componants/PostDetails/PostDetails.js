import React from 'react';
import './PostDetails.css'
import {useLoaderData, useNavigate} from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body, userId} = post;

    const handleNavigate = () => {
        navigate (`/friend/${userId}`)
    }
    return (
        <div className='postDetails'>
            <h2>Post Details No: {id}</h2>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get The Outhor</button>
        </div>
    );
};

export default PostDetails;
