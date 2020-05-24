import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';
import CoderImage from '../static/images/coder-lg.svg';

export default function LandingPage() {
  return (
    <div>
      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='flex-start'
        class='header'
      >
        <Grid item xs={12} md={12} lg={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container direction='row'>
            <div className='landing-content'>
              <h1>Hey! I am Parth Gambhir</h1>
              <p>
                This is a sample text which can be changed according to the
                demand of the developer.
              </p>
              <a href='#'>Contact Me</a>
            </div>
            {/* <div className='coder-img'>
              <img src={CoderImage} />
            </div> */}
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </div>
  );
}
