import React from 'react';
import { Grid } from '@material-ui/core';

export default function ProjectRight(props) {
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      style={{ height: '100%' }}
    >
      <Grid item xs={12} md={12}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={10} md={8}>
            <Grid
              container
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Grid item className='proj-heading'>
                {props.ProjectName}
              </Grid>
            </Grid>
            <Grid
              container
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              {/* <Grid item className='proj-subheading'>
                {props.ProjectType}
              </Grid> */}
            </Grid>
            <Grid
              container
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Grid item className='proj-content'>
                {props.ProjectDescription}
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              {props.ProjectLive &&
                <Grid item>
                  <div className='git-btn' style={{marginRight: "30px"}}>
                    <a style={!props.ProjectLive ? {pointerEvents: "none", textDecoration: "none",color: "#fff"} : {textDecoration: "none",color: "#fff"}} href={props.ProjectLink} target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                  </Grid>
              }
              <Grid item>
                <div className='git-btn'>
                <a style={!props.ProjectLive ? {pointerEvents: "none", textDecoration: "none",color: "#fff"} : {textDecoration: "none",color: "#fff"}} href={props.ProjectGithubLink} target="_blank" rel="noopener noreferrer">
                  View on Github
                  </a>
                  </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
