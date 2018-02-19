import React, { Component } from 'react'
import Filter from './Filter'
import List from './List'


export default class FilterableList extends Component {
    state = {
        filter: ''
    }

    handleChangeFilter = ev => { this.setState({ filter: ev.target.value }) }

    render() {
        const { name, summary, data } = this.props

        return (
            <div>
                <h1 className="App-header">{name}</h1>
                <Filter filter={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
                <List data={data.filter(item => item.first.startsWith(this.state.filter))} />
                <div className="App-title">{summary}</div>
            </div >
        )
    }
}