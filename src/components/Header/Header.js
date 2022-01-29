import { header } from '../../portfolio';
import styled from 'styled-components';
import { useState} from 'react'
import Navbar from '../Navbar/Navbar';
import { Link } from '../../styles/ReusableStyles';
import * as GrIcons from "react-icons/gr";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = ({aboutRef, projectsRef, skillsRef, contactRef}) => {
  const { homepage, title } = header
  const [ isMenuShown, setIsMenuShown ] = useState(true);

  return (
    <Wrapper>
      <h3>
        {homepage ? (
          <TitleLink href={homepage}>
            <GrIcons.GrStackOverflow size = {25}/>
            <span>{title}</span>
          </TitleLink>
        ) : (
          title
        )}
      </h3>
      <Navbar aboutRef = {aboutRef}  projectsRef = {projectsRef} skillsRef = {skillsRef} contactRef = {contactRef} isMenuShown = {isMenuShown} setIsMenuShown = {setIsMenuShown}/>
      <Menu onClick={() => setIsMenuShown(!isMenuShown)}>
                {isMenuShown ? <HiOutlineMenu size = {35}/> : <HiOutlineX size = {35}/> }
      </Menu>
    </Wrapper>
  )
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    height: 3em;
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
`;

const TitleLink = styled.a`
  ${Link}
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    margin-left: 10px;
  }
`;

const Menu = styled.div`
    display: none;
    align-items: center;

    @media (max-width: 620px) {
      display: flex;
    }
`;
export default Header