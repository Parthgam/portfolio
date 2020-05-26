import React from 'react';
import { Grid } from '@material-ui/core';

export default function Skills() {
  return (
    <Grid container direction='row' justify='' style={{ height: '100vh' }}>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={10}>
        <Grid item xs={12} md={12}>
          SKILLS
        </Grid>
        <Grid item xs={12} md={12}>
          This is a Sample text which can be changed according to the needs
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container direction='row'>
            <Grid item xs={12} md={12}>
              <Grid container direction='row' justify='space-around'>
                <Grid xs={6} md={6}>
                  1
                </Grid>
                <Grid xs={6} md={6}>
                  2
                </Grid>
              </Grid>
              <Grid container direction='row'>
                <Grid xs={6} md={6}>
                  1
                </Grid>
                <Grid xs={6} md={6}>
                  2
                </Grid>
              </Grid>
              <Grid container direction='row'>
                <Grid xs={6} md={6}>
                  1
                </Grid>
                <Grid xs={6} md={6}>
                  2
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1}></Grid>
    </Grid>
  );
}
