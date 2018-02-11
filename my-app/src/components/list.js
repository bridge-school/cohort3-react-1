import React from 'react';
import { checkListCondition } from '../lib/checkListCondition';

export const List = ({data,flagField}) => {
    return(
        <ul className="list-group list-group-flush">
            {   flagField ?
                checkListCondition(data,flagField).map((item,i)=>{
                    return <li key={i} className="list-group-item">{item.first} {item.last}</li>
                })
                :
                data.map((item,i)=>{
                return <li key={i} className="list-group-item">{item.first} {item.last}</li>
            })}
        </ul>
        );
};

