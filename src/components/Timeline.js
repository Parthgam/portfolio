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
    <div style={{ minHeight: '100vh' }}>
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
                  style={{ borderTop: '0.1em dashed #BDB8B8' }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              style={{ borderTop: '0.1em dashed #BDB8B8' }}
            ></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderTop: '0.1em dashed #BDB8B8' }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  style={{
                    borderRight: '0.1em dashed #BDB8B8',
                    height: '50px',
                  }}
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
                  <div class='tim-heading'>Secondary</div>
                  <div class='tim-content'>Khalsa Mont. Sen Sec. School</div>
                  <div class='tim-content-sub'>
                    <svg
                      width='0.8em'
                      height='0.8em'
                      viewBox='0 0 408 462'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M204 0.223999C171.417 0.223999 140.168 13.1677 117.128 36.2077C94.0877 59.2477 81.144 90.4966 81.144 123.08C80.432 240.292 204 385.652 204 385.652C204 385.652 327.568 240.292 326.856 123.08C326.856 90.4966 313.912 59.2477 290.872 36.2077C267.832 13.1677 236.583 0.223999 204 0.223999V0.223999ZM204 175.192C193.693 175.192 183.618 172.136 175.048 166.41C166.478 160.683 159.799 152.545 155.855 143.022C151.911 133.5 150.879 123.022 152.889 112.913C154.9 102.805 159.863 93.5192 167.151 86.2313C174.439 78.9433 183.725 73.9801 193.833 71.9693C203.942 69.9586 214.42 70.9906 223.942 74.9348C233.465 78.879 241.603 85.5583 247.33 94.1281C253.056 102.698 256.112 112.773 256.112 123.08C256.112 136.901 250.622 150.156 240.849 159.929C231.076 169.702 217.821 175.192 204 175.192Z'
                        fill='#08ACA3'
                      />
                      <path
                        d='M257.104 312.156C240.939 337.729 223.204 362.275 204 385.652C184.799 362.275 167.066 337.729 150.904 312.156C64.32 320.896 0.604004 350.488 0.604004 385.652C0.604004 427.692 91.672 461.772 204.008 461.772C316.344 461.772 407.412 427.692 407.412 385.652C407.404 350.488 343.688 320.892 257.104 312.156Z'
                        fill='#E7F8F8'
                      />
                      <path
                        d='M145.888 428.168C145.588 428.169 145.289 428.15 144.992 428.112C112 423.892 85.096 416.2 69.244 406.452C68.4438 405.979 67.7457 405.351 67.1907 404.606C66.6356 403.86 66.2346 403.011 66.0111 402.109C65.7875 401.207 65.746 400.269 65.8887 399.351C66.0315 398.432 66.3559 397.551 66.8428 396.759C67.3296 395.967 67.9694 395.281 68.7246 394.739C69.4799 394.197 70.3355 393.811 71.2415 393.603C72.1476 393.395 73.0859 393.37 74.0018 393.529C74.9177 393.688 75.7928 394.027 76.576 394.528C90.772 403.252 115.704 410.252 146.768 414.228C148.527 414.46 150.133 415.351 151.26 416.721C152.387 418.091 152.952 419.838 152.84 421.609C152.728 423.38 151.948 425.042 150.658 426.26C149.367 427.477 147.662 428.159 145.888 428.168V428.168Z'
                        fill='#E7F8F8'
                      />
                      <path
                        d='M204 431.712C197.812 431.712 191.56 431.596 185.408 431.372C184.489 431.338 183.585 431.123 182.749 430.74C181.913 430.357 181.16 429.813 180.534 429.139C179.908 428.465 179.421 427.675 179.1 426.812C178.78 425.95 178.632 425.033 178.666 424.114C178.7 423.195 178.914 422.291 179.298 421.455C179.681 420.619 180.225 419.866 180.899 419.24C181.573 418.614 182.363 418.127 183.226 417.806C184.088 417.486 185.005 417.338 185.924 417.372C195.84 417.736 206 417.772 215.756 417.564C216.678 417.531 217.597 417.684 218.46 418.011C219.322 418.339 220.11 418.836 220.778 419.473C221.445 420.11 221.979 420.874 222.346 421.72C222.714 422.566 222.909 423.477 222.92 424.4C222.963 426.256 222.267 428.053 220.985 429.396C219.703 430.738 217.94 431.517 216.084 431.56C212.1 431.661 208.072 431.712 204 431.712V431.712Z'
                        fill='#E7F8F8'
                      />
                    </svg>
                    Bulandshahr, U.P.
                  </div>
                  <div class='tim-caption'>CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>Senior Secondary</div>
                  <div class='tim-content'>Pratap Public School</div>
                  <div class='tim-content-sub'>Karnal, Haryana</div>
                  <div class='tim-caption'>Percentage 94%</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>Internship</div>
                  <div class='tim-content'>Groww, Bangalore</div>
                  <div class='tim-content-sub'>
                    Fastest growing MUTUAL fund startup
                  </div>
                  <div class='tim-caption'>2 Months</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid container>
                <div class='timeline-box'>
                  <div class='tim-heading'>Graduation</div>
                  <div class='tim-content'>
                    Indian Institute of Information Technology
                  </div>
                  <div class='tim-content-sub'>UNA, Himachal Pradesh</div>
                  <div class='tim-caption'>CGPI 8.75</div>
                </div>
              </Grid>
            </Grid>
            <Grid xs={2} md={2}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <div class='timeline-box'>
                    <div class='tim-heading'>Experience</div>
                    <div class='tim-content'>
                      MothersonSumi Infotech and Design Ltd.
                    </div>
                    <div class='tim-content-sub'>Noida, U.P.</div>
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
