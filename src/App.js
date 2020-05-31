import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Timelinesm from './components/Timeline-sm';

function App() {
  return (
    <div>
      <LandingPage></LandingPage>
      <div className='timeline-div'>
        <Timeline></Timeline>
      </div>
      <div className='timeline-sm-div'>
        <Timelinesm></Timelinesm>
      </div>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
