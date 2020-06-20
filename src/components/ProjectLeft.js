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
      <Grid
        item
        xs={11}
        md={12}
        style={{
          padding: '10px !important',
          textAlign: props.ImageAlign,
          padding: '20px',
        }}
      >
        <img
          src={require('../static/images' + props.ProjectImage)}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}
