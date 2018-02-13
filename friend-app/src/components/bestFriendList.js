import React from "react";

export const BestFriendList = ({ data }) => (
  <div>
    <h3>Best Friends</h3>
    <ul className="best-friends">
      {data.map(
        friend =>
          friend.isBestFriend && <li key={friend.id}>{friend.fullName}</li>
      )}
    </ul>
  </div>
);
