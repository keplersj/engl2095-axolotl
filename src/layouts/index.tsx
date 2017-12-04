import * as React from "react";
import Helmet from "react-helmet";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => (
  <div>
    <Helmet title="Kepler Sticka-Jones - ENGL 2095 - Axolotl" />
    {props.children()}
  </div>
);

export default DefaultLayout;
