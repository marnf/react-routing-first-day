import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';


const Friends = () => {

    const friends = useLoaderData();
    console.log(friends)

    return (
        <div>
            <h3>those r my fnds</h3>
            <h3>the number of my fnd in = {friends.length}</h3>

            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                >
                </Friend> )
            }
        </div>
    );
};

export default Friends;