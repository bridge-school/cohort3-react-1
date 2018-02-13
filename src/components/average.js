import React from 'react';

export const Average = ({ data }) => {
    const averageOfFriends = (data.reduce((acc, curr) => acc + curr.age, 0))/data.length;
    return <p>{averageOfFriends}</p>;
};
