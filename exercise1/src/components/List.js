import React, { Component } from 'react'
import Filter from './Filter'


class List extends Component {

    getName = ({ first, last }) => {
        let name = first ? `${first}` : '';
        name += last ? ` ${last}` : '';
        return name;
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((item, index) => <li key={index}>{this.getName(item)}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;