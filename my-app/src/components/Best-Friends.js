import React from 'react';
import Friends from './Friends';

const BestFriends = ({bestFriends}) => (
    <div className="friends"> 
        <Friends friendsList={ bestFriends }/>
    </div>
);

export default BestFriends;
