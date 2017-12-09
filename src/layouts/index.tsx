import * as React from "react";
import GithubCorner from "react-github-corner";
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
    <GithubCorner
      href="https://github.com/keplersj/engl2095-axolotl"
      bannerColor="#fff"
      octoColor="#000"
      size={80}
      direction="right"
      svgStyle={{ mixBlendMode: "lighten" }}
    />
  </div>
);

export default DefaultLayout;
