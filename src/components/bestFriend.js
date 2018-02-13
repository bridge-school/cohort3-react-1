import React from 'react';

export const BestFriend = ({ data }) => {
    const bf = data.filter(friend => friend.isBestFriend);
    return <ul>{bf.map((item) => <li>{item.first} {item.last}</li>)}</ul>;
};
