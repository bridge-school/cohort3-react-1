import React from "react";

export const FriendList = ({ data }) => (
  <div>
    <h3>All friends</h3>
    <ul className="friends">
      {data.map(friend => <li key={friend.fullName}>{friend.fullName}</li>)}
    </ul>
  </div>
);
