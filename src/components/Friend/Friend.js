import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, id, username, email } = friend;
  return (
    <div className="friend-container">
      <h3>{name}</h3>
      <p>{email}</p>
      <h6>
        username: <Link to={`friend/${id}`}>{username}</Link>
      </h6>
    </div>
  );
};

export default Friend;
