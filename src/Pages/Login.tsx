import classes from "./Login.module.css";
import Card from "../components/UI/Card";
import React, { useRef } from "react";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const loginFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      userEmail: userEmailRef.current?.value,
      userPassword: passwordRef.current?.value,
    };

    const loginResult = await fetch("http://localhost:64763/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", //to include the cookie in the response
      body: JSON.stringify(data),
    });

    const response = await loginResult.json();
    if (response) {
      navigate("/user");
    }
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
