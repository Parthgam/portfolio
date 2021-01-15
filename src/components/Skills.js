import React from 'react';
import { Grid } from '@material-ui/core';
import data from './data/skills.json';
import SkillManLeft from '../static/images/skills/man-left.svg';
import SkillManRight from '../static/images/skills/man-right.svg';
import SkillIcon from '../static/images/skill-main.svg';
import Hidden from '@material-ui/core/Hidden';

export default function Skills() {
  return (
    <Grid container direction='row' style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={12}>
        <Grid container>
          <Hidden smDown>
            <Grid item xs={1} md={1}></Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Grid item xs={12} md={12} className='grd-skill-image-box'>
                <img src={SkillIcon} alt='skill' className='grd-skill-image' />
              </Grid>
              <Grid item xs={12} md={12}>
                <div className='grd-skill-heading'>SKILLS</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='text-center grd-skill-content'>
                  This is a sample text which can be changed according to the
                  demands of the developer who is going to use this portfolio
                </div>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item xs={1} md={1}></Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid container className='skills-bottom-container'>
          <Hidden smDown>
            <Grid item xs={1} md={1}></Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='flex-end'
            >
              <Hidden smDown>
                <Grid
                  item
                  xs={2}
                  md={2}
                  //className='skills-left'
                >
                  <img src={SkillManLeft} alt='man-left' />
                </Grid>
              </Hidden>
              <Grid item xs={12} md={8} style={{ padding: '20px' }}>
                <Grid container className='skills-center-box'>
                  <Grid item xs={12} md={12}>
                    <Grid container direction='row' justify='flex-end'>
                      <Grid item xs={12} md={12} className='window-nav'>
                        <Grid container direction='row' justify='flex-end'>
                          <Grid item>
                            <span
                              class='dot'
                              style={{ backgroundColor: '#FF3939' }}
                            ></span>
                            <span
                              class='dot'
                              style={{ backgroundColor: '#FFE249' }}
                            ></span>
                            <span
                              class='dot'
                              style={{ backgroundColor: '#9BE461' }}
                            ></span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction='row'
                      justify='flex-start'
                      className='skills-right'
                    >
                      {data.map((value, index) => {
                        return (
                          <Grid item lg={3} md={3} sm={4} xs={6} key={index}>
                            <div className='skill-item'>
                              <Grid container>
                                <Grid item className='skill-item-image'>
                                  <img
                                  alt='skill-item'
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
                                    <Grid item className='skill-item-text w-100' style={{textAlign: 'left'}}>
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
              <Hidden smDown>
                <Grid
                  item
                  xs={2}
                  md={2}
                  // className='skills-left'
                >
                  <img src={SkillManRight} alt='man-right' />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={1} md={1}></Grid>
        </Hidden>
      </Grid>
      <Hidden smDown>
        <Grid item xs={1} md={1}></Grid>
      </Hidden>
    </Grid>
  );
}
