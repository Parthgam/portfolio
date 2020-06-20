import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';
import Image from '../static/images/project1.png';
import Image1 from '../static/images/proj1.png';
import data from './data/projects.json';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

export default function Work() {
  return (
    <div>
      {data.map((value, index) => {
        return index % 2 === 0 ? (
          <ProjectLeft
            ProjectName={value.projectname}
            ProjectType={value.type}
            ProjectDescription={value.projectdescription}
            ProjectLink={value.link}
            ProjectImage={value.projectimage}
          ></ProjectLeft>
        ) : (
          <ProjectRight
            ProjectName={value.projectname}
            ProjectType={value.type}
            ProjectDescription={value.projectdescription}
            ProjectLink={value.link}
            ProjectImage={value.projectimage}
          ></ProjectRight>
        );
      })}
    </div>
  );
}
