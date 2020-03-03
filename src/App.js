import React from 'react';
import List from './List'
import './App.css'


function App(props) {
  
  const newList = props.participants.map(list => 
    <List name={list.name} avatar={list.avatar} inSession={list.inSession} onStage={list.onStage} key={list.id} />
    );

  return (
    <main className='App'>
      <ul className="user-list">
        {newList}
      </ul>
    </main>
  );
}

export default App;