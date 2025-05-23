import UserInfo from "./UerInfo";
import UserInfoClass from "./UserInfoClass";

import React from "react";

// const About = () => {
//   return (
//     <div>
//       <div>About us</div>
//       <UserInfo name="vamsi" />
//       <UserInfoClass name="vamsi" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();

    // console.log("parent constructor called");
  }

  // componentDidMount() {
  //   console.log("component did mount called");
  //   // console.log("parent componentDidMount called");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count !== prevState.count) {
  //     console.log("count updated to:", this.state.count);
  //   }

  //   // if(this.state.count2 !== prevState.count2){
  //   //   console.log("count2 updatd")
  //   // }
  //   console.log("component update called");
  //   // console.log("parent componentDidUpdate called");
  // }
  // componentWillUnmount() {
  //   console.log("component will unmount called");
  //   // console.log("parent componentWillUnmount called");
  // }
  render() {
    // console.log("parent render called");
    return (
      <div>
        <div>About us</div>
        <UserInfo name="vamsi" />
        <UserInfoClass name="vamsi" />
      </div>
    );
  }
}

export default About;
