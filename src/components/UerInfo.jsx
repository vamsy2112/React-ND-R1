import { useState, useEffect } from "react";

const UserInfo = (props) => {
  const [count, setCount] = useState(0);
  const { name } = props;

  const funcIncrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("func interval called");
    }, 1000);
    console.log("useEffect is called");

    return () => {
      clearInterval(timer);
      console.log("useEffect cleanup is called");
    };
  }, []);
  return (
    <div className="user-info">
      <h1>hello userInfo from func component</h1>
      <h3>hello {name}</h3>
      <p>count is: {count}</p>
      <button onClick={funcIncrementHandler}>Increment func</button>
    </div>
  );
};

export default UserInfo;
