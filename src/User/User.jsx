import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from './Users';

const User = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>User data{users.length}</h1>
            <div style={{alignItems:"center"}}>
                {
                    users.map(users=><Users user={users}></Users>

                    )
                }
            </div>
        </div>
    );
};

export default User;