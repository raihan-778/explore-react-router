import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./FriendDetails.css";

const FriendDetails = () => {
    const friend = useLoaderData()

    const {name, username, email,phone}=friend
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>User Nae: {username}</h3>
            <p>Email :{email}</p>
            <p>Call him/her :{phone}</p>
        </div>
    );
};

export default FriendDetails;