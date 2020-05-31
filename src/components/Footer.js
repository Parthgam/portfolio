import React from 'react';
import { Grid } from '@material-ui/core';

export default function Footer() {
  return (
    <div class='footer-container'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ height: '100%' }}
      >
        <Grid item>
          <Grid container>
            <Grid item xs={12} md={12} style={{ padding: '20px' }}>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
              >
                <Grid item>
                  <a href='#'>Facebook</a>
                </Grid>
                <Grid item>
                  <a href='#'>Intsagram</a>
                </Grid>
                <Grid item>
                  <a href='#'>Github</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} style={{ padding: '20px' }}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                &copy; &nbsp; 2020 Parth Gambhir. All rights reserved.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
