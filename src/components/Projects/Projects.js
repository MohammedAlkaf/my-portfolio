import React from "react";

import uniqid from 'uniqid'
import styled from 'styled-components'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
// import './Projects.css'

const Projects = ({ projectsRef }) => {


  if (!projects.length) return null

  return (
    <Wrapper
      ref={projectsRef}
    >
      <Title>Projects</Title>

      <Container
      >
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Container>
    </Wrapper>
  )
}



const Wrapper = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    @media (max-width: 800px) {
      height:auto;
    }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
  color:var(--clr-primary);
`;

// const Container = styled.div`
//     max-width: 1100px;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(23em, 1fr));
//     grid-gap: 2em;
//     @media (max-width: 800px) {
//       height:auto;
//     }
// `;

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    @media (max-width: 1100px) {
      height:auto;
      flex-direction:column;
    }
`;

export default Projects