import React from 'react';


export const List = ({ data }) => {
  return (
    <ul>
      {data.map(item => <li>{item}</li>)}
    </ul>
  )
}
