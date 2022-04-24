import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import React, { Fragment } from "react";
import { UserData } from "../../Pages/User";

const Header: React.FC<{ data: UserData }> = (props) => {
  const logoutHandler = async () => {
    await fetch("http://localhost:64763/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };
  let menu;
  if (props.data) {
    menu = (
      <nav>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          SignUp
        </NavLink>
      </nav>
    );
  } else {
    menu = (
      <nav>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? classes.active : "")}
          onClick={logoutHandler}
        >
          Logout
        </NavLink>
      </nav>
    );
  }
  return (
    <div className={classes.header}>
      <h3>User Details Application</h3>
    </div>
  );
};

export default Header;
