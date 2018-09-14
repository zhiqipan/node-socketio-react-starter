import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const socket = io(); // this is loaded from html script tag

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

const jsx = (
  <div>
    <h3>Demo</h3>
    <p>Node.js + Socket.io + React</p>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
