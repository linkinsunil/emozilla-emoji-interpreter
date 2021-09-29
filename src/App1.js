import React from 'react'
import { useState } from 'react'
import './styles.css'

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

const App1 = () => {
    const [emoji, setEmoji] = useState("");
    const [meaning, setMeaning] = useState("Emoji Meaning...")

    const changeHandler = (event) => {
        const inputEmoji = event.target.value;
        setEmoji(inputEmoji);



       if (inputEmoji.length>0){
        if(inputEmoji in emojiDictionary){
            setMeaning(emojiDictionary[inputEmoji])
        } else {
            setMeaning("Can't recognize this emoji")
        }
       } else{
           
       }
    }

    const clickHandler = (emoji) => {
        setEmoji(emoji)
        setMeaning(emojiDictionary[emoji])
    } 

    return (
        <div>
            <h1>Emoji Dictionary</h1>
            <input value={emoji} onChange={changeHandler} type="text" className="inputEmoji" />
            <div className="emoji-icon">{emoji}</div>    
            <h3 className="emoji-meaning">{meaning}</h3>
            {
                emojis.map((emoji)=>(
                    <span
                        onClick={()=>clickHandler(emoji)}
                        style={{cursor:"pointer"}}
                    >
                        {emoji}
                    </span>
                ))
            }
        </div>
    )
}

export default App1
