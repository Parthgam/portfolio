import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '../static/images/avatartemp.svg';
import data from './data/skills.json';

export default function Skills() {
  const imageurl = (url) => {
    console.log(url);
    return require(url);
  };

  return (
    <Grid container direction='row' justify='' style={{ height: '100vh' }}>
      <Grid item xs={1} md={2}></Grid>
      <Grid item xs={10} md={8}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <div className='grd-skill-heading'>SKILLS</div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className='grd-skill-content'>
              This is a Sample text which can be changed according to the needs
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container direction='row'>
            <Grid item xs={12} md={12}>
              <Grid container direction='row' justify='space-between'>
                {data.map((value, index) => {
                  return (
                    <Grid item lg={4} md={4} xs={6}>
                      <div className='skill-item'>
                        <Grid container>
                          <Grid item style={{ height: '2em', width: '2em' }}>
                            <img
                              src={require('../static/images/avatartemp.svg')}
                            />
                          </Grid>
                          <Grid item xs={1} md={1}>
                            <Grid container>
                              <Grid
                                xs={12}
                                md={12}
                                style={{
                                  height: '1em',
                                  borderBottom: '0.1em dashed #BDB8B8',
                                }}
                              ></Grid>
                              <Grid
                                xs={12}
                                md={12}
                                style={{ height: '1em' }}
                              ></Grid>
                            </Grid>
                          </Grid>
                          <Grid item style={{ height: '2em' }}>
                            <Grid
                              container
                              direction='row'
                              justify='center'
                              alignItems='center'
                              style={{ height: '2em' }}
                            >
                              <Grid item style={{ marginTop: '-2px' }}>
                                <div class='dot'></div>
                              </Grid>
                              <Grid item style={{ marginLeft: '0.5em' }}>
                                {value.skillname}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={2}></Grid>
    </Grid>
  );
}
