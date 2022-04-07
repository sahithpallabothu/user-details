import classes from "./Login.module.css";
import Card from "../components/UI/Card";
import React, { useRef } from "react";
import Button from "../components/UI/Button";

const Login = () => {
  const userEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <Card>
      <div className={classes.container}>
        <h1>Login</h1>
        <form className={classes.userForm} onSubmit={loginFormHandler}>
          <div className={classes.formControl}>
            <label htmlFor="userEmail">User Email:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              ref={userEmailRef}
              placeholder="Enter User Email"
              autoFocus
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              ref={passwordRef}
              placeholder="Enter Password"
            />
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
