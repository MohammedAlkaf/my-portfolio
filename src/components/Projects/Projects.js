import uniqid from 'uniqid'
import styled from 'styled-components'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
// import './Projects.css'

const Projects = ({projectsRef}) => {
  if (!projects.length) return null

  return (
    <Wrapper ref = {projectsRef}>
      <Title>Projects</Title>

      <Container>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    margin-top: 5em;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
`;

export default Projects