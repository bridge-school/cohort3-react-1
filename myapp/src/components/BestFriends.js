import React from 'react';


export const BestFriends = ({ friends }) => {
  return (
    <ul>
      {
        friends.filter( friend => {
          return friend.isBestFriend
        })
        .map( friend =>
          <li>
            {friend.first} {friend.last}
          </li>
        )
      }
    </ul>
  )
}
