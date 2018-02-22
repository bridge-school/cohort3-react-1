import React from 'react';
import FriendName from './Friend-Name';

const Friends = ({ friendsList }) => (
  <div className="friends"> 
    <p>
    { friendsList.map((friend, index) => <li key={index}><FriendName friend={friend} /> </li>) }</p>
  </div>
);

export default Friends;
