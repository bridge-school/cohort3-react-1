import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.data.map(item => <li>{item}</li>)}
                </ul>
                <div>{this.props.summary}</div>
            </div>
        )
    }
}
