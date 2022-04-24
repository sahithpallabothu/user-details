import React, { Fragment } from "react";

export interface UserData {
  userEmail: string;
  userPassword: string;
}

const User: React.FC<{ data: UserData }> = (props) => {
  return (
    <Fragment>
      <div>Hello {props.data.userEmail}</div>
      <p>How are you</p>
    </Fragment>
  );
};

export default User;
