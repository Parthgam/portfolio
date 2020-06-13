import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';
import Image from '../static/images/proj.png';
import Image1 from '../static/images/proj1.png';

export default function Work() {
  return (
    <div>
      {/* <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='flex-start'
        class='work-header'
      >
        <Grid item xs={12} md={12} lg={12} class='header-nav-container'></Grid>
      </Grid> */}
      <Grid
        container
        style={{ minHeight: '100vh', backgroundColor: '#8FD2CE' }}
      >
        <Grid item xs={12} md={12}>
          <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ height: '100%' }}
              >
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{ padding: '10px !important' }}
                >
                  <img
                    src={Image1}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ minHeight: '100vh', backgroundColor: '#BBE2D3' }}
      >
        <Grid item xs={12} md={12}>
          <Grid container style={{ height: '100%' }}>
            <Grid item xs={6} md={6}></Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ height: '100%' }}
              >
                <Grid item xs={12} md={12}>
                  <img
                    src={Image}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
