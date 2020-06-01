import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '../static/images/avatartemp.svg';
import data from './data/skills.json';
import SkillMan from '../static/images/skill-man.svg';
import SkillManBottom from '../static/images/skill-man-bottom.svg';

export default function Skills() {
  const imageurl = (url) => {
    console.log(url);
    return require(url);
  };

  return (
    <Grid container direction='row' justify='' style={{ minHeight: '100vh' }}>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={10}>
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
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='flex-end'
          >
            <Grid item xs={2} md={2}>
              <img src={SkillMan} />
            </Grid>
            <Grid item xs={10} md={10} className='skills-right'>
              <Grid container direction='row' justify='flex-start'>
                {data.map((value, index) => {
                  return (
                    <Grid item lg={3} md={3} xs={12}>
                      <div className='skill-item'>
                        <Grid container>
                          <Grid item style={{ height: '2em', width: '2em' }}>
                            <img
                              src={require('../static/images/skills' +
                                value.svgpath)}
                            />
                          </Grid>
                          <Grid item style={{ height: '2em' }}>
                            <Grid
                              container
                              direction='row'
                              justify='center'
                              alignItems='center'
                              style={{ height: '2em' }}
                            >
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
      <Grid item xs={1} md={1}></Grid>
    </Grid>
  );
}
