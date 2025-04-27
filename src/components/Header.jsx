import { useState } from "react";
import { Link } from "react-router-dom";

import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const loginBtnHandler = () => {
    if (loginBtn == "Login") {
      setLoginBtn("Logout");
    } else {
      setLoginBtn("Login");
    }
  };
  return (
    <div className="header">
      <img className="logo" src={APP_LOGO} alt="logo" />
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About us</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <button className="nav-link-login" onClick={loginBtnHandler}>
          {loginBtn}
        </button>
        <li className="nav-link">Sign up</li>
      </ul>
    </div>
  );
};

export default Header;
