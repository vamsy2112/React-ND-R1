import React from "react";

class ContactCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello from contact card class comp</h1>
        <p>hello {this.props.name}</p>
        <p>count is : {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          increment class btn
        </button>
      </div>
    );
  }
}

export default ContactCardClass;
