import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '../static/images/avatar.svg';

export default function Header() {
  return (
    <Grid container direction='row' justify='flex-start' alignItems='center'>
      <Grid item xs={6} md={6}>
        <a href='#'>
          <img src={Avatar} alt='ICON'></img>
        </a>
      </Grid>
      <Grid item xs={6} md={6}>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <strong>RESUME</strong>
          </Grid>
          <Grid item>
            <strong>PROJECTS</strong>
          </Grid>
          <Grid item>
            <strong>BLOG</strong>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
