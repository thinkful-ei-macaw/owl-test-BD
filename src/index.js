import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Participants from './Participants'

ReactDOM.render(<App participants={Participants}/>, document.getElementById('root'));