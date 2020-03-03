import React from 'react';
import List from './List'
import Stage from './Stage'
import './App.css'


function App(props) {
  
  const newList = props.participants.map(list => 
    <List name={list.name} avatar={list.avatar} inSession={list.inSession} onStage={list.onStage} key={list.id} />
    );
  const newStage = props.participants.map(user => {
   if(user.onStage) {
    return <Stage name={user.name} avatar={user.avatar} onStage={user.onStage} /> }});
   
  return (
    <main className='App'>
      <ul className="user-list">
        {newList}
      </ul>
      <div className='stage'>{newStage}</div>
    </main>
  );
  
}

export default App;