import React from 'react';

export const BestFriendsList = ({data}) => {
    return (
        <div>
          <h2>Best Friends</h2>
            <ul>
            {
              data
                .filter((friend) => {return friend.isBestFriend})
                .map((friend) => {return <li>{friend.first}</li>})
            }
            </ul>
        </div>
    )
};