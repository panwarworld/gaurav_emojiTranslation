import React, { useState } from "react";
import "./style.css";

let emojis = {
  "😀": "Laugh",
  "😂": "Tears of Joy",
  "🙂": "Smile",
  "🙃": "Upside Down",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Blessed",
  "🥰": "Loved",
  "😍": "Fall in Love",
  "😘": "Blow Kiss",
  "😋": "Yummy",
  "😜": "Naughty",
  "🤑": "Money minded",
  "🤐": "Zipped Mouth",
  "🤥": "Pinocchio (Liar)",
  "☹️": "Sad",
  "👽": "Alien",
  "👹": "Monster",
  "👺": "Goblin",
  "💋": "Lips",
  "👻": "Ghost",
  "😐": "Neutral Face",
  "🤫": "Shushing (Be quite)",
  "❤️": "Heart",
  "💣": "Bomb",
  "👊": "Punch",
  "✌️": "Peace",
  "👂": "Ear",
  "👃": "Nose",
  "🧁": "Cupcake",
  "🍉": "Water Melon",
  "🎁": "Gift",
  "🏏": "Cricket",
  "🏳️": "Flag",
};

let options = Object.keys(emojis);

function App() {
  let [userInput, setUserInput] = useState("");
  function userInputHandle(event) {
    let input = event.target.value;
    let output = emojis[input];
    if (output === undefined) {
      setUserInput("Oops!! We don't have that..Will add it soon");
    } else {
      setUserInput(output);
    }
  }

  function emojiHandler(emoji) {
    let input = emoji;

    let output = emojis[input];
    setUserInput(output);
  }
  return (
    <div className="App">
      <h1>EMOJI TRANSLATOR</h1>
      <hr />

      <div>
        <br />
        <br />
        <input
          placeholder="Enter Emoji"
          onChange={userInputHandle}
          style={{ border: "2px solid black" }}
        />
        <div className="result"> {userInput} </div>
        <h3>Choose from Below</h3>
        <div className="listDisplay">
          {options.map(function (emoji) {
            return (
              <span
                className="list"
                onClick={() => emojiHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
