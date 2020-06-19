import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@material-ui/core';

export default function Contact() {
  return (
    <Grid
      container
      direction='row'
      style={{ minHeight: '100vh', backgroundColor: '#F4F6F6' }}
    >
      <Grid item xs={12} md={12} style={{ height: 'auto' }}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ height: '100%', padding: '70px' }}
        >
          <Grid item xs={11} md={4} className='contact-container'>
            <Grid
              container
              direction='row'
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <Grid item xs={12} md={12}>
                <div className='contact-heading'>
                  Contact Me
                  <br />
                </div>
              </Grid>
              <Grid item xs={12} md={12} className='contact-input'>
                {/* <TextField
                  label='Your Name'
                  id='outlined-size-small'
                  variant='outlined'
                  size='small'
                  fullWidth
                /> */}
                <InputLabel
                  htmlFor='input-with-icon-adornment'
                  style={{ fontSize: '12px' }}
                >
                  Your Name
                </InputLabel>
                <Input
                  id='input-with-icon-adornment'
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={12} className='contact-input'>
                {/* <TextField
                  label='Your Email'
                  id='outlined-size-small'
                  variant='outlined'
                  size='small'
                  fullWidth
                /> */}
                <InputLabel
                  htmlFor='input-with-icon-adornment'
                  style={{ fontSize: '12px' }}
                >
                  Your Email
                </InputLabel>
                <Input
                  id='input-with-icon-adornment'
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={12} className='contact-input'>
                {/* <TextField
                  id='outlined-multiline-static'
                  label='Your Message'
                  multiline
                  rows={4}
                  variant='outlined'
                  size='small'
                  fullWidth
                /> */}

                <InputLabel
                  htmlFor='input-with-icon-adornment'
                  style={{ fontSize: '12px' }}
                >
                  Your Message
                </InputLabel>
                <TextField
                  id='standard-multiline-static'
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12} className='contact-footer'>
                <div>
                  <span className='contact-submit-btn'>Submit</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
