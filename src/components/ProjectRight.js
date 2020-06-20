import React from 'react';
import { Grid } from '@material-ui/core';
import Image from '../static/images/project1.png';

export default function ProjectRight(props) {
  return (
    <Grid container style={{ minHeight: '100vh', backgroundColor: '#BBE2D3' }}>
      <Grid item xs={12} md={12}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              style={{ height: '100%' }}
            >
              <Grid item xs={12} md={12}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item xs={12} md={8}>
                    <Grid
                      container
                      container
                      direction='row'
                      justify='center'
                      alignItems='center'
                    >
                      <Grid item className='proj-heading'>
                        {props.ProjectName}
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      container
                      direction='row'
                      justify='center'
                      alignItems='center'
                    >
                      <Grid item className='proj-subheading'>
                        {props.ProjectType}
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      container
                      direction='row'
                      justify='center'
                      alignItems='center'
                    >
                      <Grid item className='proj-content'>
                        {props.ProjectDescription}
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction='row'
                      justify='center'
                      alignItems='center'
                    >
                      <Grid item>
                        <span className='git-btn'>View on Github</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
                  src={require('../static/images' + props.ProjectImage)}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
