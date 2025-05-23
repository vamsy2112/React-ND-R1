import React from "react";

class ContactCardClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    this.state = {
      res: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vamsy2112");
    const json = await data.json();
    // console.log(json);
    // console.log("component mounted");
    this.setState({
      res: json,
    });
  }

  componentDidUpdate() {
    // console.log("component updated");
  }

  componentWillUnmount() {
    // console.log("component unmounted");
  }
  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h1>Hello from contact card class comp</h1>
        <p>hello {this.props.name}</p>
        <img src={this.state.res.avatar_url} />
        <h2>{this.state.res.name}</h2>
        <p>{this.state.res.bio}</p>
      </div>
    );
  }
}

export default ContactCardClass;
