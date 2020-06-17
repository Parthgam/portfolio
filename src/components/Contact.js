import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

export default function Contact() {
  return (
    <Grid container direction='row' style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={12} style={{ height: 'auto' }}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ height: '100%' }}
        >
          <Grid item xs={12} md={4}>
            <Grid container direction='row'>
              <Grid item xs={12} md={12}>
                <div>Contact Me</div>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label='Your Name'
                  id='outlined-size-small'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label='Your Email'
                  id='outlined-size-small'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id='outlined-multiline-static'
                  label='Your Message'
                  multiline
                  rows={4}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <div>
                  <button>Close</button>
                  <button>Submit</button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
