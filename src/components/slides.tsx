import * as bayes from "bayes";
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
import axolotl from "./axolotl";

const classifier = bayes();

classifier.learn("They were not animals", "lightblue");
classifier.learn("He returned many times", "pink");
classifier.learn("I could think about him a lot", "pink");
classifier.learn("I am an axolotl", "pink");
classifier.learn("being an axolotl", "pink");
classifier.learn("alien to his human life", "pink");
classifier.learn("Save us", "pink");

const colorFromText = (passage: string): string =>
  classifier.categorize(passage);

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
