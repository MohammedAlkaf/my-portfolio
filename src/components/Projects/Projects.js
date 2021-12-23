import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import uniqid from 'uniqid'
import styled from 'styled-components'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
// import './Projects.css'

const Projects = ({ projectsRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!projects.length) return null

  return (
    <Wrapper
      ref={projectsRef}
    >
      <Title>Projects</Title>

      <Container
        ref={ref}
        as={motion.div}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Container>
    </Wrapper>
  )
}

const squareVariants = {
  visible: { opacity: 1, y:0 , transition: { duration: 1.5 } },
  hidden: {  opacity: 0,  y:-50 }
};

const Wrapper = styled.div`
    margin-top: 5em;
    height:100%;
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

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23em, 1fr));
    grid-gap: 2em;
    @media (max-width: 800px) {
      height:auto;
    }
`;

export default Projects