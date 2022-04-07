import React, { useRef } from "react";
import classes from "./Signup.module.css";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const SignUp = () => {
  const userEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  const signUpFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(userEmailRef, passwordRef, genderRef);
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
          <div className={classes.formControl}>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" ref={genderRef}>
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
