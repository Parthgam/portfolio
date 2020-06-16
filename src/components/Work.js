import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';
import Image from '../static/images/project1.png';
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
                  style={{ padding: '10px !important', textAlign: 'center' }}
                >
                  <img
                    src={Image}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Grid>
              </Grid>
            </Grid>
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
                          Realtii{' '}
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
                          Web Design
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
                          I worked on the communication site for Realtii, a
                          reimagining of how people search for real estate. The
                          site called for lots of illustrations to convey its
                          purpose, with a big focus on creating a welcoming
                          feel.
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
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ minHeight: '100vh', backgroundColor: '#BBE2D3' }}
      >
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
                          Realtii{' '}
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
                          Web Design
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
                          I worked on the communication site for Realtii, a
                          reimagining of how people search for real estate. The
                          site called for lots of illustrations to convey its
                          purpose, with a big focus on creating a welcoming
                          feel.
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
