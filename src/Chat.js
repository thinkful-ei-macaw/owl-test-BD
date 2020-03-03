import React from 'react'
import './Chat.css'


function Chat(props) {
  if (props.type === 'message') {
  return (
  <div className="message-entry">
    <img className="chatbar-avatar" src={props.participant.avatar} alt="user avatar" />  
    <h2>{props.participant.name}</h2>
    <p>{props.time}</p>
    <p className="message">{props.message}</p>
    
  </div>
  )
} else if (props.type === 'thumbs-up' || props.type === 'thumbs-down') {
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Gave a {props.type}</p>
    </div>
    
  )
}
else if ( props.type === 'raise-hand'){
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Raised their hand</p>
    </div>
  )
}
else if (props.type === 'join'){
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Joined</p>
    </div>
    
  )
} else if (props.type === 'leave') {
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Left</p>
    </div>
  )
} else if (props.type === 'join-stage') {
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Joined the stage</p>
    </div>
  )
} else {
  return (
    <div className="chat-entry">
      <h2 className="chath2">{props.participant.name}</h2>
      <p className="chatp">Left the stage</p>
    </div>
  )
};
}

export default Chat;