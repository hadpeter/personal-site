import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './components/bio.js';
import Internships from './components/internships.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bio></Bio>
        <Internships></Internships>
      </header>
    </div>
  );
}

export default App;
