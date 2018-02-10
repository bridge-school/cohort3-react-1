import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <h1 className="App-header">{this.props.name}</h1>
                <ul>
                    {this.props.data.map(item => <li>{item}</li>)}
                </ul>
                <div className="App-title">{this.props.summary}</div>
            </div>
        )
    }
}
