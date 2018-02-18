import React , {Component} from 'react';

class DynamicList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAge: false,
      label: "Show age"
    }
  }

  toggle = () => {
    this.setState({showAge: !this.state.showAge});
    //alert(this.state.showAge)
    if (!this.state.showAge)
      this.setState({label: "Hide age"})
    else
      this.setState({label: "Show age"})

  }

  render() {
    return (
      <div>
        <p>{this.props.first} {this.props.last}</p>
        <button onClick={this.toggle}>{this.state.label}</button>
        {this.state.showAge ? this.props.age : null}
      </div>
    )
  }

}

export default DynamicList;