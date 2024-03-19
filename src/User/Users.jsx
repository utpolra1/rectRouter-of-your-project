import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({user}) => {
    const {id, name, email,phone}=user;
    return (
        <div style={{border:"2px solid green", padding:"10px"}}>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <Link to={`/post/${id}`}>Click to datils</Link>
        </div>
    );
};

export default Users;