import React, { Fragment } from "react";
import classes from './Button.module.css';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 
{

}

const Button: React.FC<IButtonProps> = (props) => {
  /*Below is ex of destructuring using rest operator
      const {children,...rest} = props;
  */
  return (
    <Fragment>
      <button className={classes.button} {...props}>{props.children}</button>
    </Fragment>
  );
};

export default Button;