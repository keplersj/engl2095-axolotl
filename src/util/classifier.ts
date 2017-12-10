import * as bayes from "bayes";

export const classifier = bayes();

classifier.learn("They were not animals", "lightblue");
classifier.learn("He returned many times", "pink");
classifier.learn("I could think about him a lot", "pink");
classifier.learn("I am an axolotl", "pink");
classifier.learn("being an axolotl", "pink");
classifier.learn("alien to his human life", "pink");
classifier.learn("Save us", "pink");

export const colorFromText = (passage: string): string =>
  classifier.categorize(passage);
