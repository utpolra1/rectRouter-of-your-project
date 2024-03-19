import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDatils = () => {
    const userdatils=useLoaderData();
    const {id,name}=userdatils;
    return (
        <div>
            <h1>Post datails</h1>
            <h1>id:{id}</h1>
            <h1>name:{name}</h1>
        </div>
    );
};

export default UserDatils;