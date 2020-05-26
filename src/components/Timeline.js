import React from 'react';
import Avatar from '../static/images/avatar.svg';
import SecondaryIcon from '../static/images/secondary.svg';
import HighSchoolIcon from '../static/images/high-school.svg';
import InternshipIcon from '../static/images/internship.svg';
import GraduationIcon from '../static/images/graduation-hat.svg';
import JobIcon from '../static/images/job.svg';
import { Grid } from '@material-ui/core';

export default function Timeline() {
  return (
    <div>
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10} style={{ textalign: 'center' }}>
          <div class='timeline-icon'>
            <img src={Avatar} />
          </div>
          <div class='timeline-caption'>
            This is a sample text which can be changed according to the demands
            of the developer who is going to use this portfolio
          </div>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>

      <div class='timeline'>
        <div>
          <Grid container id='breadcrumbs-two'>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid item xs={6} md={6}></Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderTop: '2px dashed #BDB8B8' }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              style={{ borderTop: '2px dashed #BDB8B8' }}
            ></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderTop: '2px dashed #BDB8B8' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id='breadcrumbs-two'>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item>
                  <img src={SecondaryIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item>
                  <img src={HighSchoolIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item>
                  <img src={InternshipIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item>
                  <img src={GraduationIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item>
                  <img src={JobIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id='breadcrumbs-two'>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderRight: '2px dashed #BDB8B8', height: '50px' }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id='breadcrumbs-two'>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item style={{ marginLeft: '-3em' }}>
                  <li class='li-first'>2013</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item style={{ marginLeft: '-3em' }}>
                  <li class='li-second'>2015</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item style={{ marginLeft: '-3em' }}>
                  <li class='li-third'>2018</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item style={{ marginLeft: '-3em' }}>
                  <li class='li-fourth'>2019</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
              >
                <Grid item style={{ marginLeft: '-3em' }}>
                  <li class='li-fifth'>2019</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container direction='row' justify='center' alignItems='stretch'>
            <Grid xs={1} md={1}></Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>HIGH SCHOOL</div>
                  <div class='tim-content'>Khalsa</div>
                  <div class='tim caption'>CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>HIGH SCHOOL</div>
                  <div class='tim-content'>Khalsa</div>
                  <div class='tim caption'>CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>HIGH SCHOOL</div>
                  <div class='tim-content'>Khalsa</div>
                  <div class='tim caption'>CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>HIGH SCHOOL</div>
                  <div class='tim-content'>
                    Khalsa KhalsaK halsaK halsaKhalsa Khalsa KhalsaKhalsa Kha
                    lsaKhal saKhalsaKha lsaKhalsaKha l saKhalsaKha l saKhalsas
                  </div>
                  <div class='tim caption'>CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <div class='timeline-box'>
                    <div class='tim-heading'>HIGH SCHOOL</div>
                    <div class='tim-content'>Khalsa</div>
                    <div class='tim caption'>CGPI 10</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={1} md={1}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
