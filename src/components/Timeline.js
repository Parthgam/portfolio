import React from "react";
import SecondaryIcon from "../assets/images/secondary.svg";
import HighSchoolIcon from "../assets/images/high-school.svg";
import InternshipIcon from "../assets/images/internship.svg";
import GraduationIcon from "../assets/images/graduation-hat.svg";
import JobIcon from "../assets/images/job.svg";
import TimelineIcon from "../assets/images/timeline-icon.svg";
import { Grid } from "@material-ui/core";

export default function Timeline() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10} style={{ textalign: "center" }}>
          <div class="timeline-icon">
            <img src={TimelineIcon} alt="timeline-icon" width="100px" />
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Grid item xs={12} md={6}>
              <span class="timeline-caption">
                This is a sample text which can be changed according to the
                demands of the developer who is going to use this portfolio
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>

      <div class="timeline">
        <div>
          <Grid container id="breadcrumbs-two">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid item xs={6} md={6}></Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderTop: "0.0837em solid #E5E7E9" }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              style={{ borderTop: "0.0837em solid #E5E7E9" }}
            ></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ borderTop: "0.0837em solid #E5E7E9" }}
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
                  }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id="breadcrumbs-two">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <img src={SecondaryIcon} alt="secondary" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <img src={HighSchoolIcon} alt="high-school" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <img src={InternshipIcon} alt="internship-icon" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <img src={GraduationIcon} alt="graduation-icon" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <img src={JobIcon} alt="job-icon" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id="breadcrumbs-two">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
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
                    borderRight: "0.0837em solid #E5E7E9",
                    height: "50px",
                  }}
                ></Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container id="breadcrumbs-two">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item style={{ marginLeft: "-3em" }}>
                  <li class="li-first">2013</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item style={{ marginLeft: "-3em" }}>
                  <li class="li-second">2015</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item style={{ marginLeft: "-3em" }}>
                  <li class="li-third">2018</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item style={{ marginLeft: "-3em" }}>
                  <li class="li-fourth">2019</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item style={{ marginLeft: "-3em" }}>
                  <li class="li-fifth">2019</li>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>

          <Grid container direction="row" justify="center" alignItems="stretch">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <div class="timeline-box">
                  <div class="tim-heading">Secondary</div>
                  <div class="tim-content">Khalsa Mont. Sen Sec. School</div>
                  <div class="tim-content-sub">Bulandshahr, U.P.</div>
                  <div class="tim-caption">CGPI 10</div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <div class="timeline-box">
                  <div class="tim-heading">Senior Secondary</div>
                  <div class="tim-content">Pratap Public School</div>
                  <div class="tim-content-sub">Karnal, Haryana</div>
                  <div class="tim-caption">Percentage 94%</div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <div class="timeline-box">
                  <div class="tim-heading">Internship</div>
                  <div class="tim-content">Groww, Bangalore</div>
                  <div class="tim-content-sub">MUTUAL fund startup</div>
                  <div class="tim-caption">2 Months</div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid container>
                <div class="timeline-box">
                  <div class="tim-heading">Graduation</div>
                  <div class="tim-content">IIIT Una</div>
                  <div class="tim-content-sub">UNA, Himachal Pradesh</div>
                  <div class="tim-caption">CGPI 8.75</div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <div class="timeline-box">
                    <div class="tim-heading">Experience</div>
                    <div class="tim-content">
                      MIND-Infotech
                    </div>
                    <div class="tim-content-sub">Noida, U.P.</div>
                    <div class="tim-caption">Currently Working</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
