import uniqid from 'uniqid'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
// import './ProjectContainer.css'
import { Link } from '../../styles/ReusableStyles'

const ProjectContainer = ({ project }) => (
  <Wrapper>
    <h3>{project.name}</h3>
    <ProjectImg src = {project.photo}/>

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

const Wrapper = styled.div`
  max-width:500px;
  padding: 2em;
  margin: 0.5em;
  text-align: center;
  box-shadow: var(--shadow);

  h3{
    color:var(--clr-primary);
  }
  @media (max-width: 800px) {
      width:90%;
    }
`;

const ProjectImg = styled.img`
  margin-top:1em;
  width:95%;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

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