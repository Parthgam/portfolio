import React from "react";
import { Grid } from "@material-ui/core";
import SecondaryIcon from "../assets/images/secondary.svg";
import HighSchoolIcon from "../assets/images/high-school.svg";
import InternshipIcon from "../assets/images/internship.svg";
import GraduationIcon from "../assets/images/graduation-hat.svg";
import JobIcon from "../assets/images/job.svg";
import Avatar from "../assets/images/avatar.svg";
import TimelineIcon from "../assets/images/timeline-icon.svg";

export default function Timelinesm() {
  return (
    <div>
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={12} md={12} style={{}}>
          <Grid item xs={12} md={12} style={{ textalign: "center" }}>
            <div class="timeline-icon">
              <img src={TimelineIcon} alt="timeline" width="100px" />
            </div>
            <div class="timeline-caption">
              This is a sample text which can be changed according to the
              demands of the developer who is going to use this portfolio
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ padding: "30px", backgroundColor: "#fbfcfc" }}
        >
          <Grid item xs={12} md={12} style={{ marginTop: "100px" }}>
            <Grid container style={{ borderLeft: "0.0937em solid #E5E7E9" }}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{
                      borderTop: "0.0937em solid #E5E7E9",
                    }}
                  ></Grid>
                  <Grid item style={{ marginTop: "-35px" }}>
                    <img src={SecondaryIcon} alt="secondary-icon" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{ borderTop: "0.0937em solid #E5E7E9" }}
                  ></Grid>
                  <Grid
                    item
                    xs={7}
                    md={7}
                    style={{ width: "100px", marginTop: "-1.5em" }}
                    id="breadcrumbs-two"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ overflow: "hidden" }}
                    >
                      <Grid item>
                        <li class="li-first">2013</li>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  paddingBottom: "70px",
                }}
              >
                <Grid container>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={11} md={11}>
                    <div class="timeline-box">
                      <div class="tim-heading">Secondary</div>
                      <div class="tim-content">
                        Khalsa Mont. Sen Sec. School
                      </div>
                      <div class="tim-content-sub">Bulandshahr, U.P.</div>
                      <div class="tim-caption">CGPI 10</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container style={{ borderLeft: "0.0937em solid #E5E7E9" }}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{
                      borderTop: "0.0937em solid #E5E7E9",
                    }}
                  ></Grid>
                  <Grid item style={{ marginTop: "-35px" }}>
                    <img src={HighSchoolIcon} alt="high-school" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{ borderTop: "0.0937em solid #E5E7E9" }}
                  ></Grid>
                  <Grid
                    item
                    xs={7}
                    md={7}
                    style={{ width: "100px", marginTop: "-1.5em" }}
                    id="breadcrumbs-two"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ overflow: "hidden" }}
                    >
                      <Grid item>
                        <li class="li-second">2015</li>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  paddingBottom: "70px",
                }}
              >
                <Grid container>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={11} md={11}>
                    <div class="timeline-box">
                      <div class="tim-heading">Senior Secondary</div>
                      <div class="tim-content">Pratap Public School</div>
                      <div class="tim-content-sub">Karnal, Haryana</div>
                      <div class="tim-caption">Percentage 94%</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container style={{ borderLeft: "0.0937em solid #E5E7E9" }}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{
                      borderTop: "0.0937em solid #E5E7E9",
                    }}
                  ></Grid>
                  <Grid item style={{ marginTop: "-35px" }}>
                    <img src={InternshipIcon} alt="internship-icon" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{ borderTop: "0.0937em solid #E5E7E9" }}
                  ></Grid>
                  <Grid
                    item
                    xs={7}
                    md={7}
                    style={{ width: "100px", marginTop: "-1.5em" }}
                    id="breadcrumbs-two"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ overflow: "hidden" }}
                    >
                      <Grid item>
                        <li class="li-third">2018</li>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  paddingBottom: "70px",
                }}
              >
                <Grid container>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={11} md={11}>
                    <div class="timeline-box">
                      <div class="tim-heading">Internship</div>
                      <div class="tim-content">Groww, Bangalore</div>
                      <div class="tim-content-sub">MUTUAL fund startup</div>
                      <div class="tim-caption">2 Months</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container style={{ borderLeft: "0.0937em solid #E5E7E9" }}>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{
                      borderTop: "0.0937em solid #E5E7E9",
                    }}
                  ></Grid>
                  <Grid item style={{ marginTop: "-35px" }}>
                    <img src={GraduationIcon} alt="graduation-icon" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{ borderTop: "0.0937em solid #E5E7E9" }}
                  ></Grid>
                  <Grid
                    item
                    xs={7}
                    md={7}
                    style={{ width: "100px", marginTop: "-1.5em" }}
                    id="breadcrumbs-two"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ overflow: "hidden" }}
                    >
                      <Grid item>
                        <li class="li-fourth">2019</li>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  paddingBottom: "70px",
                }}
              >
                <Grid container>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={11} md={11}>
                    <div class="timeline-box">
                      <div class="tim-heading">Graduation</div>
                      <div class="tim-content">IIIT Una</div>
                      <div class="tim-content-sub">UNA, Himachal Pradesh</div>
                      <div class="tim-caption">CGPI 8.75</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{
                      borderTop: "0.0937em solid #E5E7E9",
                    }}
                  ></Grid>
                  <Grid item style={{ marginTop: "-35px" }}>
                    <img src={JobIcon} alt="job-icon" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    style={{ borderTop: "0.0937em solid #E5E7E9" }}
                  ></Grid>
                  <Grid
                    item
                    xs={7}
                    md={7}
                    style={{ width: "100px", marginTop: "-1.5em" }}
                    id="breadcrumbs-two"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ overflow: "hidden" }}
                    >
                      <Grid item>
                        <li class="li-fifth">2019</li>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  paddingBottom: "70px",
                }}
              >
                <Grid container>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={11} md={11}>
                    <div class="timeline-box">
                      <div class="tim-heading">Experience</div>
                      <div class="tim-content">
                        MothersonSumi Infotech and Design Ltd.
                      </div>
                      <div class="tim-content-sub">Noida, U.P.</div>
                      <div class="tim-caption">Currently Working</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
    </div>
  );
}
