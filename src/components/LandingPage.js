import React from "react";
import Header from "./Header";
import { Grid } from "@material-ui/core";
import CoderImage from "../static/images/coder-lg.svg";

export default function LandingPage() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        class="header"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ height: "20%" }}
          class="header-nav-container"
        >
          <Header></Header>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ height: "80%" }}
          className="landing-container"
        >
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="center"
            style={{ height: "100%" }}
          >
            <Grid item md={6} className="landing-content">
              <Grid item xs={12} md={12} className="animate-h1">
                <h5 className='sup-heading'>Hey! Peeps My name is</h5>
              </Grid>
              <Grid item xs={12} md={12} className="animate-h1">
                <h1>
                  Parth Gambhir |&nbsp;
                  <div class="ms-slider">
                    <ul class="ms-slider__words">
                      <li class="ms-slider__word">Developer</li>
                      <li class="ms-slider__word">Designer</li>
                      <li class="ms-slider__word">Gamer</li>
                      <li class="ms-slider__word">Developer</li>
                    </ul>
                  </div>  
                </h1>
              </Grid>
              <Grid item xs={12} md={12} style={{ marginTop: "1em" }}>
                <h5>
                  I'm a Software Developer based in Noida, U.P. having 
                  experience of building Web Applications.
                </h5>
              </Grid>
              <Grid item xs={12} md={12} style={{ marginTop: "3em" }}>
                <a href="/" class="contact-btn">
                  <svg
                    width="1.34em"
                    height="0.8em"
                    viewBox="0 0 512 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginTop: "0.25em" }}
                  >
                    <path
                      d="M467 0H44.9999C38.0729 0 31.5879 1.703 25.7209 4.51L255 233.789L306.389 184.402C306.389 184.402 306.393 184.397 306.394 184.395C306.395 184.393 306.399 184.391 306.399 184.391L486.286 4.514C480.418 1.705 473.929 0 467 0Z"
                      fill="white"
                    />
                    <path
                      d="M507.496 25.728L338.213 195.002L507.49 364.279C510.297 358.412 512 351.927 512 345V45C512 38.077 510.301 31.593 507.496 25.728Z"
                      fill="white"
                    />
                    <path
                      d="M4.51 25.7209C1.703 31.5879 0 38.0729 0 44.9999V345C0 351.923 1.701 358.409 4.506 364.274L173.789 195L4.51 25.7209Z"
                      fill="white"
                    />
                    <path
                      d="M317.002 216.213L265.606 265.606C262.676 268.536 258.838 270.001 255.001 270.001C251.164 270.001 247.325 268.536 244.396 265.606L195 216.211L25.714 385.486C31.582 388.295 38.071 390 45 390H467C473.927 390 480.412 388.297 486.279 385.49L317.002 216.213Z"
                      fill="white"
                    />
                  </svg>
                  <span class="contact-btn-txt">MESSAGE ME</span>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </div>
  );
}
