import React from "react";

class ContactCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello from contact card class comp</h1>
        <p>hello {this.props.name}</p>
        <p>count is : {this.state.count}</p>
      </div>
    );
  }
}

export default ContactCardClass;
