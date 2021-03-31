import React from "react";
import { Grid } from "@material-ui/core";
import data from "./data/projects.json";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import Hidden from "@material-ui/core/Hidden";
import JobIcon from "../assets/images/job.svg";
import WorkMan from "../assets/images/work-man.svg";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function Work() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        className="work-header"
      >
        <Grid item xs={12} md={12} lg={12} xl={12} style={{ height: 'inherit', width: '100%'}}>
         <div id='bg-left'>
            <p id="bg-left-text" className='heading-font'>WORK</p>
          </div>
          {/* <div id="bg-bottom">
            <p id="bg-bottom-text" className='heading-font'>PROJECTS</p>
          </div>  */}
          
        <Grid
          item
          xs={12}
          md={12}
          lg={12} xl={12}
          style={{ height: "20%" }}
          className="header-nav-container"
        >
          <Header ImageHeight="80px"></Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} style={{ height: "80%"}} className="work-landing-container">
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={12} md={12} lg={12} xl={12} style={{ width: '100%', display: 'flex', alignItems: 'center'}}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ height: "80vh" }}
          >
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <div>
                <span className="work-hd-subheading">
                  What I've been upto.
                </span>{" "}
                <br /> <br />
                <span className="work-hd-content">
                  Here's a selection of some recent work. For more up to the
                  minute work you can visit me on GitHub.
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6} style={{ textAlign: "center" }}>
              <img src={WorkMan} className='work-image' alt="work-man" width="70%" />
            </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
        </Grid>
      </Grid>
      {data.map((value, index) => {
        return index % 2 === 0 ? (
          <Hidden mdUp key={index}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: "110vh", backgroundColor: "#EAFAF1" }}
              className="small-project"
            >
              <Grid item xs={12} md={12} style={{ height: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  style={{ height: "100%" }}
                >
                  <Grid item xs={12} style={{ height: "100%" }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign="center"
                    ></ProjectLeft>
                  </Grid>
                  <Grid item xs={12} style={{ height: "100%" }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectGithubLink={value.githubLink}
                      ProjectImage={value.projectimage}
                      ProjectLive={value.isLive}
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
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: "110vh", backgroundColor: "#D5F5E3" }}
              className="small-project"
            >
              <Grid item xs={12} md={12} style={{ height: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  style={{ height: "100%" }}
                >
                  <Grid item xs={12} style={{ height: "100%" }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign="center"
                    ></ProjectLeft>
                  </Grid>
                  <Grid item xs={12} style={{ height: "100%" }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectGithubLink={value.githubLink}
                      ProjectImage={value.projectimage}
                      ProjectLive={value.isLive}
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
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: "110vh", backgroundColor: "#EAFAF1" }}
              className="mid-project"
            >
              <Grid item xs={12} md={12} style={{ height: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  style={{ height: "100%" }}
                >
                  <Grid item md={6} style={{ height: "100%" }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign="center"
                    ></ProjectLeft>
                  </Grid>
                  <Grid item md={6} style={{ height: "100%" }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectGithubLink={value.githubLink}
                      ProjectImage={value.projectimage}
                      ProjectLive={value.isLive}
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
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: "110vh", backgroundColor: "#D5F5E3" }}
              className="mid-project"
            >
              <Grid item xs={12} md={12} style={{ height: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  style={{ height: "100%" }}
                >
                  <Grid item md={6} style={{ height: "100%" }}>
                    <ProjectRight
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectGithubLink={value.githubLink}
                      ProjectImage={value.projectimage}
                      ProjectLive={value.isLive}
                    ></ProjectRight>
                  </Grid>
                  <Grid item md={6} style={{ height: "100%" }}>
                    <ProjectLeft
                      ProjectName={value.projectname}
                      ProjectType={value.type}
                      ProjectDescription={value.projectdescription}
                      ProjectLink={value.link}
                      ProjectImage={value.projectimage}
                      ImageAlign="center"
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
