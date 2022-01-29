import uniqid from 'uniqid'
import React, { useEffect } from "react";
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import SlideShow from './SlideShow'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from '../../styles/ReusableStyles'

const ProjectContainer = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return(
    <Wrapper
    ref={ref}
    as={motion.div}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    >
      <h3>{project.name}</h3>
      {/* <ProjectImg src = {project.photo}/> */}
      <SlideShow slideImages = { project.photo }/>

      <Descripition>{project.description}</Descripition>
      {project.stack && (
        <Stack>
          {project.stack.map((item) => (
            <StackItem key={uniqid()}>
              {item}
            </StackItem>
          ))}
        </Stack>
      )}

      {project.sourceCode && (
        <GitHubLink
          href={project.sourceCode}
          aria-label='source code'
        >
          <GitHubIcon />
        </GitHubLink>
      )}

      {project.livePreview && (
        <ProjectLink
          href={project.livePreview}
          aria-label='live preview'
        >
          <LaunchIcon />
        </ProjectLink>
      )}
    </Wrapper>
  )
}

const squareVariants = {
  visible: { opacity: 1, y:0 , transition: { duration: 2 } },
  hidden: {  opacity: 0,  y:-50 }
};

const Wrapper = styled.div`
  max-width:500px;
  padding: 2em;
  margin: 2em 0.5em;
  text-align: center;
  backdrop-filter: blur(10px);
  background-color: var(--blurry-bg); 
  box-shadow: var(--shadow);
  
  h3{
    color:var(--clr-primary);
  }
  @media (max-width: 800px) {
      width:90%;
    }
`;

const Descripition = styled.p`
  margin-top: 1em;
`;

const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;
  list-style-type: none;
`;

const StackItem = styled.li`
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--clr-fg-alt);
`;

const GitHubLink = styled.a`
${Link}
color: var(--clr-fg);
margin-left: 0.5em;
`;

const ProjectLink = styled(GitHubLink)``;

export default ProjectContainer