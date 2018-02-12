import React from 'react';


export const AllFriends = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => <li>{friend.first} {friend.last}</li>)}
    </ul>
  )
}
