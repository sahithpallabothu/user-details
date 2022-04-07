import { Fragment } from "react";
import Header from "./Header";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Layout;
