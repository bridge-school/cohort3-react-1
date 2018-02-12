import React from 'react';

// export const H1 = ({ text, children }) => {
  // return React.createElement('h1', null, children);
  // return <h1>{children}</h1>;
// };

//ES6 way:
export const H1 = ({ text, children }) => <h1 className = "strong"> {children} </h1>
