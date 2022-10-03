import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData()
    const navigate =useNavigate()
    const handleNavigate = ()=>{
        navigate(`/friend/${userId}`)
    }
    const {title ,userId,body}=details
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>User Id: {userId}</p>
            <h1><small>Description: {body}</small></h1>
            <button onClick={handleNavigate}>Author Details</button>
        </div>
    );
};

export default PostDetails;