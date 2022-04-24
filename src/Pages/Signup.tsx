import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const SignUp = () => {
  const userEmail = useRef<HTMLInputElement>(null);
  const userPassword = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();
  const signUpFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    // shortcut for {userEmail:userEmail} is {userEmail}
    const data = {
      userEmail: userEmail.current?.value,
      userPassword: userPassword.current?.value,
      gender: gender.current?.value,
    };
    const response = await fetch("http://localhost:64763/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const content = await response.json();
    if (content) {
      navigate("/login");
    }
  };
  return (
    <Card>
      <div className={classes.container}>
        <h1>Sign Up</h1>
        <form className={classes.userForm} onSubmit={signUpFormHandler}>
          <div className={classes.formControl}>
            <label htmlFor="userEmail">User Email:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              ref={userEmail}
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
              ref={userPassword}
              placeholder="Enter Password"
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" ref={gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </Card>
  );
};

export default SignUp;
