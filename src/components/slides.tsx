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
    {`
      There was a time when I thought a great deal about the axolotls.
      I went to see them in the aquarium at the Jardin des Plantes and stayed for hours watching them, observing their immobility, their faint movements.
      Now I am an axolotl.

      I got to them by chance one spring morning when Paris was spreading its peacock tail after a wintry Lent.
      I was heading down tbe boulevard Port-Royal, then I took Saint-Marcel and L’Hôpital and saw green among all that grey and remembered the lions.
      I was friend of the lions and panthers, but had never gone into the dark, humid building that was the aquarium.
      I left my bike against tbe gratings and went to look at the tulips.
      The lions were sad and ugly and my panther was asleep.
      I decided on the aquarium, looked obliquely at banal fish until, unexpectedly, I hit it off with the axolotls.
      I stayed watching them for an hour and left, unable to think of anything else.

      In the library at Sainte-Geneviève, I consulted a dictionary and learned that axolotls are the larval stage (provided with gills) of a species of salamander of the genus Ambystoma.
      That they were Mexican I knew already by looking at them and their little pink Aztec faces and the placard at the top of the tank.
      I read that specimens of them had been found in Africa capable of living on dry land during the periods of drought, and continuing their life under water when the rainy season came.
      I found their Spanish name, ajolote, and the mention that they were edible, and that their oil was used (no longer used, it said ) like cod-liver oil.

      I didn’t care to look up any of the specialized works, but the next day I went back to the Jardin des Plantes.
      I began to go every morning, morning and aftemoon some days.
      The aquarium guard smiled perplexedly taking my ticket.
      I would lean up against the iron bar in front of the tanks and set to watching them.
      There’s nothing strange in this, because after the first minute I knew that we were linked, that something infinitely lost and distant kept pulling us together.
      It had been enough to detain me that first morning in front of the sheet of glass where some bubbles rose through the water.
      The axolotls huddled on the wretched narrow (only I can know how narrow and wretched) floor of moss and stone in the tank.
      There were nine specimens, and the majority pressed their heads against the glass, looking with their eyes of gold at whoever came near them.
      Disconcerted, almost ashamed, I felt it a lewdness to be peering at these silent and immobile figures heaped at the bottom of the tank.
      Mentally I isolated one, situated on the right and somewhat apart from the others, to study it better.
      I saw a rosy little body, translucent (I thought of those Chinese figurines of milky glass), looking like a small lizard about six inches long, ending in a fish’s tail of extraordinary delicacy, the most sensitive part of our body.
      Along the back ran a transparent fin which joined with the tail, but what obsessed me was the feet, of the slenderest nicety, ending in tiny fingers with minutely human nails.
      And then I discovered its eyes, its face.
      Inexpressive features, with no other trait save the eyes, two orifices, like brooches, wholly of transparent gold, lacking any life but looking, letting themselves be penetrated by my look, which seemed to travel past the golden level and lose itself in a diaphanous interior mystery.
      A very slender black halo ringed the eye and etched it onto the pink flesh, onto the rosy stone of the head, vaguely triangular, but with curved and triangular sides which gave it a total likeness to a statuette corroded by time.
      The mouth was masked by the triangular plane of the face, its considerable size would be guessed only in profile; in front a delicate crevice barely slit the lifeless stone.
      On both sides of the head where the ears should have been, there grew three tiny sprigs, red as coral, a vegetal outgrowth, the gills, I suppose.
      And they were the only thing quick about it; every ten or fifteen seconds the sprigs pricked up stiffly and again subsided.
      Once in a while a foot would barely move, I saw the diminutive toes poise mildly on the moss.
      It’s that we don’t enjoy moving a lot, and the tank is so cramped—we barely move in any direction and we’re hitting one of the others with our tail or our head—difficulties arise, fights, tiredness.
      The time feels like it’s less if we stay quietly.

      It was their quietness that made me lean toward them fascinated the first time I saw the axolotls.
      Obscurely I seemed to understand their secret will, to abolish space and time with an indifferent immobility.
      I knew better later; the gill contraction, the tentative reckoning of the delicate feet on the stones, the abrupt swimming (some of them swim with a simple undulation of the body) proved to me that they were capable of escaping that mineral lethargy in which they spent whole hours.
      Above all else, their eyes obsessed me.
      In the standing tanks on either side of them, different fishes showed me the simple stupidity of their handsome eyes so similar to our own.
      The eyes of the axolotls spoke to me of the presence of a different life, of another way of seeing.
      Glueing my face to the glass (the guard would cough fussily once in a while), I tried to see better those diminutive golden points, that entrance to the infinitely slow and remote world of these rosy creatures.
      It was useless to tap with one finger on the glass directly in front of their faces; they never gave the least reaction.
      The golden eyes continued burning with their soft, terrible light; they continued looking at me from an unfathomable depth which made me dizzy.

      And nevertheless they were close.
      I knew it before this, before being an axolotl.
      I learned it the day I came near them for the first time.
      The anthropomorphic features of a monkey reveal the reverse of what most people believe, the distance that is traveled from them to us.
      The absolute lack of similarity between axolotls and human beings proved to me that my recognition was valid, that I was not propping myself up with easy analogies.
      Only the little hands … But an eft, the common newt, has such hands also, and we are not at all alike.
      I think it was the axolotls’ heads, that triangular pink shape with the tiny eyes of gold.
      That looked and knew.
      That laid the claim.
      They were not animals.

      It would seem easy, almost obvious, to fall into mythology.
      I began seeing in the axolotls a metamorphosis which did not succeed in revoking a mysterious humanity.
      I imagined them aware, slaves of their bodies, condemned infinitely to the silence of the abyss, to a hopeless meditation.
      Their blind gaze, the diminutive gold disc without expression and nonetheless terribly shining, went through me like a message:
      “Save us, save us.”
      I caught myself mumbling words of advice, conveying childish hopes.
      They continued to look at me, immobile; from time to time the rosy branches of the gills stiffened.
      In that instant I felt a muted pain; perhaps they were seeing me, attracting my strength to penetrate into the impenetrable thing of their lives.
      They were not human beings, but I had found in no animal such a profound relation with myself.
      The axolotls were like witnesses of something, and at times like horrible judges.
      I felt ignoble in front of them; there was such a terrifying purity in those transparent eyes.
      They were larvas, but larva means disguise and also phantom.
      Behind those Aztec faces, without expression but of an implacable cruelty, what semblance was awaiting its hour?

      I was afraid of them.
      I think that had it not been for feeling the proximity of other visitors and the guard, I would not have been bold enough to remain alone with them.
      “You eat them alive with your eyes, hey,” the guard said, laughing; he likely thought I was a little cracked.
      What he didn’t notice was that it was they devouring me slowly with their eyes, in a cannibalism of gold.
      At any distance from the aquarium, I had only to think of them, it was as though I were being affected from a distance.
      It got to the point that I was going every day, and at night I thought of them immobile in the darkness, slowly putting a hand out which immediately encountered another.
      Perhaps their eyes could see in the dead of night, and for them the day continued indefinitely.
      The eyes of axolotls have no lids.

      I know now that there was nothing strange, that that had to occur.
      Leaning over in front of the tank each morning, the recognition was greater.
      They were suffering, every fiber of my body reached toward that stifled pain, that stiff torment at the bottom of the tank.
      They were lying in wait for something, a remote dominion destroyed, an age of liberty when the world had been that of the axolotls.
      Not possible that such a terrible expression which was attaining the overthrow of that forced blankness on their stone faces should carry any message other than one of pain, proof of that eternal sentence, of that liquid hell they were undergoing.
      Hopelessly, I wanted to prove to myself that my own sensibility was projecting a nonexistent consciousness upon the axolotls.
      They and I knew.
      So there was nothing strange in what happened.
      My face was pressed against the glass of the aquarium, my eyes were attempting once more to penetrate the mystery of those eyes of gold without iris, without pupil.
      I saw from very close up the face of an axolotl immobile next to the glass.
      No transition and no surprise, I saw my face against the glass, I saw it on the outside of the tank, I saw it on the other side of the glass. Then my face drew back and I understood.

      Only one thing was strange: to go on thinking as usual, to know.
      To realize that was, for the first moment, like the horror of a man buried alive awaking to his fate.
      Outside, my face came close to the glass again, I saw my mouth, the lips compressed with the effort of understanding the axolotls.
      I was an axolotl and now I knew instantly that no understanding was possible.
      He was outside the aquarium, his thinking was a thinking outside the tank.
      Recognizlng him, being him himself, I was an axolotl and in my world.
      The horror began—I learned in the same moment —of believing myself prisoner in the body of an axolotl, metamorphosed into him with my human mind intact, buried alive in an axolotl, condemned to move lucidly among unconscious creatures.
      But that stopped when a foot just grazed my face, when I moved just a little to one side and saw an axolotl next to me who was looking at me, and understood that he knew also, no communication possible, but very clearly.
      Or I was also in him, or all of us were thinking humanlike, incapable of expression, limited to the golden splendor of our eyes looking at the face of the man pressed against the aquarium.

      He returned many times, but he comes less often now.
      Weeks pass without his showing up.
      I saw him yesterday, he looked at me for a long time and left briskly.
      It seemed to me that he was not so much interested in us any more, that he was coming out of habit.
      Since the only thing I do is think, I could think about him a lot.
      It occurs to me that at the beginning we continued to communicate, that he felt more than ever one with the mystery which was claiming him.
      But the bridges were broken between him and me, because what was his obsession is now an axolotl, alien to his human life.
      I think that at the beginning I was capable of returning to him in a certain way—ah, only in a certain way—and of keeping awake his desire to know us better.
      I am an axolotl for good now, and if I think like a man it’s only because every axolotl thinks like a man inside his rosy stone semblance.
      I believe that all this succeeded in communicating something to him in those first days, when I was still he.
      And in this final solitude to which he no longer comes, I console myself by thinking that perhaps he is going to write a story about us, that, believing he’s making up a story, he’s going to write all this about axolotls.
      `
      .split("\n")
      .filter(passage => passage.trim() !== "")
      .map((passage, index) => (
        <Slide key={index} bgColor={colorFromText(passage)}>
          <Text>{passage.trim()}</Text>
        </Slide>
      ))}
  </Deck>
);
