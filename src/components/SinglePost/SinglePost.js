import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = ({post}) => {
     const {id, title, body}=post
     const navigate = useNavigate()
     const handleNavigate =()=>{
        navigate(`/post/${id}`)
     }
    return (
        <div className='post-description'>
            <h2>Post Title: {title}</h2>
            <p>post Details: {body}</p>
           <Link to={`/post/${id}`}>
            <button>Show Details</button>
            <button onClick={handleNavigate}>Show Details2</button>
           </Link>

        </div>
    );
};

export default SinglePost;