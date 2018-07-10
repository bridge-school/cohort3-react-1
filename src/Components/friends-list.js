import React from 'react';

export const FriendsList = ({data}) => {
    return (
        <div>
          <h2>Friends</h2>
            <ul>
            {
              data.map((friend) => <li>{friend.first}</li>)
            }
            </ul>
        </div>
    )
};