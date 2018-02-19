import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleChangeFilter} value={this.props.filter}></input>
            </div>
        )
    }
}
