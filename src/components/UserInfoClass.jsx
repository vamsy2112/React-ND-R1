import React from "react";

class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // console.log("child constructor called");
  }

  componentDidMount() {
    console.log("component did mount called");
    // this.timer = setInterval(() => {
    //   console.log("interval called");
    // }, 1000);
    // console.log("parent componentDidMount called");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("count updated to:", this.state.count);
    }

    // if(this.state.count2 !== prevState.count2){
    //   console.log("count2 updatd")
    // }
    console.log("component update called");
    // console.log("parent componentDidUpdate called");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will unmount called");
    // console.log("parent componentWillUnmount called");
  }

  render() {
    console.log("child render called");
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
