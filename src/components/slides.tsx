import * as React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import { colorFromText } from "../util/classifier";
import axolotl from "./axolotl";

const theme = createTheme(
  {
    primary: "#e3dce8"
  },
  {
    primary: "Helvetica",
    secondary: {
      googleFont: true,
      name: "Droid Serif",
      styles: ["400", "700i"]
    }
  }
);

export default () => (
  <Deck progress="bar" theme={theme}>
    <Slide>
      <Text>{"Cortazar's Axolotl"}</Text>
    </Slide>
    {axolotl
      .split("\n")
      .map(passage => passage.trim())
      .filter(passage => passage !== "")
      .map((passage, index) => (
        <Slide key={index} bgColor={colorFromText(passage)}>
          <Text>{passage}</Text>
        </Slide>
      ))}
  </Deck>
);
