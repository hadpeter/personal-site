import React from 'react';
import profpic from './components/prof_pic.jpg';
import './App.css';
import Bio from './components/bio.js';
import Internships from './components/internships.js';
import Navigation from './components/navigation.js';
import Education from './components/education.js';
import Projects from './components/projects.js';
import Studentorgs from './components/studentorgs.js';
import Skills from './components/skills.js';
import Interests from './components/interests.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Bio></Bio>
        <Internships></Internships>
        <Education></Education>
        <Projects></Projects>
        <Studentorgs></Studentorgs>
        <Skills></Skills>
        <Interests></Interests>
      </header>
    </div>
  );
}

export default App;
