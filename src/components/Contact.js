import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@material-ui/core';
import ContactImage from '../static/images/contactus.svg';

export default function Contact() {
  return (
    <Grid
      container
      direction='row'
      style={{ minHeight: '100vh', backgroundColor: '#F4F6F6' }}
    >
      <Grid item xs={12} md={12}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='h-100'
        >
          <Grid item xs={11} md={10} className='contact-container h-80'>
            <Grid container className='h-100'>
              <Grid
                item
                xs={6}
                md={6}
                style={{ textAlign: 'center', backgroundColor: '#F4FCFC' }}
              >
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  style={{ height: '100%' }}
                >
                  <img src={ContactImage} width='70%' height='auto' />
                </Grid>
              </Grid>
              <Grid item xs={6} md={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
