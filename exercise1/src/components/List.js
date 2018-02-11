import React from 'react'


const List = ({ name, data, summary }) => {
    return (
        <div>
            <h1 className="App-header">{name}</h1>
            <ul>
                {data.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className="App-title">{summary}</div>
        </div>
    )
}

export default List;