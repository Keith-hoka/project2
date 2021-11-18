import React, { useState, useEffect} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import firebase from "firebase";

import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Chat.css";

function Chat(props) {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  console.log(user);

  useEffect(() => {
    if (user) {
      // db.collection("users").doc(user.uid).onSnapshot(snapshot =>
      //   setUserName(snapshot.data().name));
      setUserName(user.email);

      db.collection("users").doc(user.uid).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())));

    }
  }, [user]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('users').doc(user.uid).collection('messages').add({
        message: input,
        name: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat-headerInfo">
          <h3>{userName}</h3>
          <p>
           Last seen {" "}
           {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
          </p>
        </div>

        <div className="chat-headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        {messages.map(message => (
          <p className={`chat-message ${ message.name === user.email && 'chat-receiver'}`}>
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="chat-timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form>
          <input onChange={(event) => setInput(event.target.value)} value={input} type="text" placeholder="Enter your message here" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
