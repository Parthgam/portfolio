import React from 'react';
import { Grid } from '@material-ui/core';
import data from './data/projects.json';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
import Hidden from '@material-ui/core/Hidden';
import JobIcon from '../static/images/job.svg';
import Header from './Header';

export default function Work() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} style={{}} className='work-header'>
          <Grid
            container
            direction='column'
            justify='space-between'
            alignItems='center'
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ height: '20%' }}
              className='header-nav-container'
              style={{ width: '100%' }}
            >
              <Header></Header>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ position: 'absolute', bottom: '2em' }}
            >
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <div
                  className=''
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  WORK
                </div>
                <div
                  className=''
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <img src={JobIcon} />
                </div>
                <div
                  className=''
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  What I've been up to. Here's a selection of some recent work.
                  For more up to the minute work you can visit me on dribbble or
                  twitter.
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
    </div>
  );
}
