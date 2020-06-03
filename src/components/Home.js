import React from 'react';
import LandingPage from './LandingPage';
import Timeline from './Timeline';
import Skills from './Skills';
import Footer from './Footer';
import Timelinesm from './Timeline-sm';

function Home() {
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

export default Home;
