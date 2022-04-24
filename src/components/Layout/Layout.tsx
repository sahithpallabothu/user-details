import { Fragment } from "react";
import { UserData } from "../../Pages/User";
import Header from "./Header";

const Layout: React.FC<{ data: UserData }> = (props) => {
  return (
    <Fragment>
      <Header data={props.data} />
      {props.children}
    </Fragment>
  );
};

export default Layout;
