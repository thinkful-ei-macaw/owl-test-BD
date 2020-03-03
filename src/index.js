import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Participants from './Participants';
import Chatlog from './Chatlog';

ReactDOM.render(<App participants={Participants} chatlog={Chatlog}/>, document.getElementById('root'));