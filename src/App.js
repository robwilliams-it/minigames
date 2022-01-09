import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Board from './components/board/board';
import './DefaultApp.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br/>
        <Board count={6}/>
      </header>
    </div>
  );
}

export default App;
