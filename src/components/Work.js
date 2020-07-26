import React from 'react';
import { Grid } from '@material-ui/core';
import data from './data/projects.json';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
import Hidden from '@material-ui/core/Hidden';
import JobIcon from '../static/images/job.svg';
import WorkMan from '../static/images/work-man.svg';
import Header from './Header';
import Footer from './Footer';

export default function Work() {
  return (
    <div>
      <Grid container style={{position: 'relative',overflow: 'hidden'}}>
          <div id='bg-left'>
            <p id="bg-left-text">WORK</p>
          </div>
          <div id="bg-bottom">
            <p id="bg-bottom-text">PROJECTS</p>
          </div>
        <Grid item xs={12} md={12} style={{height: '100%'}} className='work-header'>
          <Grid
            container
            direction='column'
            justify='space-between'
            alignItems='center'
            style={{height: '100%'}} 
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ height: '20%', width: '100%' }}
              className='header-nav-container'
            >
              <Header ImageHeight='80px'></Header>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{  height: '80%', width: '100%' }}
            >
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
              >
                <Grid
                  item
                  xs={6}
                  md={6}
                >
                  <span className='work-hd-subheading'>
                    What I've been up to.
                  </span>{' '}
                  <br /> <br />
                  Here's a selection of some recent work. For more up to the
                  minute work you can visit me on dribbble or twitter.
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                >
                  <img src={WorkMan} alt="work-man" width="70%" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      ></Grid>
      {data.map((value, index) => {
        return index % 2 === 0 ? (
          <Hidden mdUp>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              style={{ minHeight: '100vh', backgroundColor: '#8FD2CE' }}
              className='small-project'
            >
              <Grid item xs={12} md={12} style={{ height: '100%' }}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  style={{ height: '100%' }}
                >
                  <Grid item xs={12} style={{ height: '100%' }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign='center'
                    ></ProjectLeft>
                  </Grid>
                  <Grid item xs={12} style={{ height: '100%' }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                    ></ProjectRight>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        ) : (
          <Hidden mdUp>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              style={{ minHeight: '100vh', backgroundColor: '#BBE2D3' }}
              className='small-project'
            >
              <Grid item xs={12} md={12} style={{ height: '100%' }}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  style={{ height: '100%' }}
                >
                  <Grid item xs={12} style={{ height: '100%' }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign='center'
                    ></ProjectLeft>
                  </Grid>
                  <Grid item xs={12} style={{ height: '100%' }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                    ></ProjectRight>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        );
      })}
      {data.map((value, index) => {
        return index % 2 === 0 ? (
          <Hidden smDown>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              style={{ minHeight: '100vh', backgroundColor: '#8FD2CE' }}
              className='mid-project'
            >
              <Grid item xs={12} md={12} style={{ height: '100%' }}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  style={{ height: '100%' }}
                >
                  <Grid item md={6} style={{ height: '100%' }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign='center'
                    ></ProjectLeft>
                  </Grid>
                  <Grid item md={6} style={{ height: '100%' }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                    ></ProjectRight>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        ) : (
          <Hidden smDown>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              style={{ minHeight: '100vh', backgroundColor: '#BBE2D3' }}
              className='mid-project'
            >
              <Grid item xs={12} md={12} style={{ height: '100%' }}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  style={{ height: '100%' }}
                >
                  <Grid item md={6} style={{ height: '100%' }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                    ></ProjectRight>
                  </Grid>
                  <Grid item md={6} style={{ height: '100%' }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign='center'
                    ></ProjectLeft>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        );
      })}
      <Footer></Footer>
    </div>
  );
}
