import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    console.log(friend)
    const {name,email, phone,username}= friend
    return (
        <div className='friend-details'>
            <h5>name:{name}</h5>
            <h5>email:{email}</h5>
            <h5>phone:{phone}</h5>
            <h5>username:{username}</h5>
        </div>
    );
};

export default Friend;