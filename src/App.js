import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "joy",
  "😁": "fun",
  "😂": "laugh",
  "🤣": "ROFL",
  "😃": "Happy laugh",
  "😄": "joy laugh",
  "😅": "Sigh laugh",
  "😆": "Burst laugh",
  "😉": "Wink",
  "😎": "cool",
  "😍": "Lovely",
  "😘": "love kiss",
  "😗": "kiss",
  "😙": "joy kiss",
  "😚": "shy kiss",
  "🙂": "happy",
  "🤗": "cuddle",
  "🤩": "shining joy expression",
  "🤔": "curious",
  "🤨": "thinking",
  "😠": "angry",
  "🤬": "abusively angry",
  "🤢": "unwell"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("meaning will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("can't recognise this emoji at this moment");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Decoder</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Enter an emoji here"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h1 style={{ fontSize: "3rem" }}> {emoji} </h1>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
