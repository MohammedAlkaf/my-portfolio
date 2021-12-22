import { header } from '../../portfolio';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import { Link } from '../../styles/ReusableStyles';
// import './Header.css';

const Header = ({aboutRef, projectsRef, skillsRef, contactRef}) => {
  const { homepage, title } = header

  return (
    <Wrapper>
      <h3>
        {homepage ? (
          <TitleLink href={homepage}>
            {title}
          </TitleLink>
        ) : (
          title
        )}
      </h3>
      <Navbar aboutRef = {aboutRef}  projectsRef = {projectsRef} skillsRef = {skillsRef} contactRef = {contactRef}/>
    </Wrapper>
  )
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    height: 4em;
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
  }
  
  @media (max-width: 600px) {
    height: 6em;
  }
`;

const TitleLink = styled.a`
  ${Link}
`;

export default Header