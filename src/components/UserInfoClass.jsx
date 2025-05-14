import React from "react";

class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="userInfoClass">
        <h1>Hello from userInfoClass component </h1>
        <h3>hello {name}</h3>
        <p>count is: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Class increment
        </button>
      </div>
    );
  }
}

export default UserInfoClass;
