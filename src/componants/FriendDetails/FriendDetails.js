import React from 'react';
import {useLoaderData} from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div className='friend-details'>
           <h1>Name: {friend.name}</h1> 
           <p>Email: {friend.email}</p>
           <h3>They are best outhor in this time</h3>
        </div>
    );
};

export default FriendDetails;