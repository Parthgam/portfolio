import React from 'react';
import Header from './layouts/Header';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@material-ui/core';
import ContactImage from '../assets/images/contactus.svg';

export default function Contact() {
  return (
    <div>
    <Grid
      container
      direction="row"
      className='contact-header'
    >
      <Grid item xs={12}
          md={12}
          lg={12} className="header-nav-container" style={{height: '20%'}}>
        <Header></Header>
      </Grid>
      <Grid item xs={12} md={12} style={{height: '80%'}}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='h-100'
        >
          <Grid item xs={11} md={12} className='contact-container h-80'>
            <Grid container className='h-100'>
              <Grid
                item
                xs={12}
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
                  <img src={ContactImage} width='70%' height='auto' alt='contact-icon'/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}></Grid>
    </Grid>
    </div>
  );
}
