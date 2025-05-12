import { useState } from "react";

const UserInfo = (props) => {
  const [count, setCount] = useState(0);
  const { name } = props;
  return (
    <div className="user-info">
      <h1>hello userInfo from func component</h1>
      <h3>hello {name}</h3>
      <p>count is: {count}</p>
    </div>
  );
};

export default UserInfo;
