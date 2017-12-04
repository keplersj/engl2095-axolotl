import * as React from "react";
import Helmet from "react-helmet";

/*import "./index.css";*/

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet title="Kepler Sticka-Jones - ENGL 2095 - Axolotl" />
        {this.props.children()}
      </div>
    );
  }
}

export default DefaultLayout;
