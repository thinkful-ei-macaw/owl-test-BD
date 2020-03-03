import React from 'react';
import './List.css';


function List(props) {

let status = "";
if (props.onStage === true) {
  status = "On Stage";
} else if (props.onStage === false && props.inSession === true) {
  status = "In Session"
} else {
  status = "Left Session"
}

return (
    <li className="User" id={props.id}>
      <img src={props.avatar} alt="" className='chatbar-avatar'></img>
      <h2>{props.name}</h2>
      <p className="Status"><ul><li className="Empty"></li></ul>{status}</p>
    </li>
 )
}

export default List;