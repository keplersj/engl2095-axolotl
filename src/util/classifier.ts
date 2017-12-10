import { BayesClassifier } from "natural";

type rgbArray = [number, number, number];

const animalBase: rgbArray = [255, 192, 203];
const manBase: rgbArray = [173, 216, 230];

function pickHex(color1: rgbArray, color2: rgbArray, weight: number) {
  const w1 = weight;
  const w2 = 1 - w1;
  const rgb = [
    Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2)
  ];
  return rgb;
}

const classifier = new BayesClassifier();

classifier.addDocument("They were not animals", "lightblue");
classifier.addDocument("He returned many times", "pink");
classifier.addDocument("I could think about him a lot", "pink");
classifier.addDocument("I am an axolotl", "pink");
classifier.addDocument("being an axolotl", "pink");
classifier.addDocument("alien to his human life", "pink");
classifier.addDocument("Save us", "pink");

classifier.train();

type NaturalClassifications = Array<{
  label: string;
  value: number;
}>;

export const colorFromText = (passage: string): string =>
  `rgb(${pickHex(
    manBase,
    animalBase,
    ((classifier as any).getClassifications(
      passage
    ) as NaturalClassifications)[0].value
  ).join(",")})`;
