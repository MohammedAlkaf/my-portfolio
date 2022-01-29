import React from 'react';
import { useContext} from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { Link } from '../../styles/ReusableStyles'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'

const Navbar = ({aboutRef, projectsRef, skillsRef, contactRef, isMenuShown, setIsMenuShown}) => {
const [{ themeName, toggleTheme }] = useContext(ThemeContext);

const excuteScroll = (section) => {

    switch (section){
        case 'about':
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'projects':
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'skills':
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'contact':
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            window.alert("Unknown Page chosen")
    }
    setIsMenuShown(!isMenuShown);
}
return (
    <NavWrapper className='center' isDisplayed = { isMenuShown }>
        <List>
            <ListItem>
                <NavigationLink onClick={() => excuteScroll('about')}>
                About
                </NavigationLink>
            </ListItem>

            {projects.length ? (
            <ListItem>
                <NavigationLink onClick={() => excuteScroll('projects')}>
                Projects
                </NavigationLink>
            </ListItem>
            ) : null}

            {skills.length ? (
            <ListItem>
                <NavigationLink onClick={() => excuteScroll('skills')}>
                Skills
                </NavigationLink>
            </ListItem>
            ) : null}

            {contact.email ? (
            <ListItem>
                <NavigationLink onClick={() => excuteScroll('contact')}>
                Contact
                </NavigationLink>
            </ListItem>
            ) : null}
            <ThemeToggleButton
                onClick={() => {
                    toggleTheme();
                    setIsMenuShown(!isMenuShown);
                }}
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </ThemeToggleButton>
        </List>
    </NavWrapper>
)
}

const NavWrapper = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s, height 0.5s;

    @media (max-width: 620px) {
        backdrop-filter: blur(10px);
        background-color: var(--menu-bg); 
        padding:1em 0em;
        position: absolute;
        right:0;
        top:3em;
        width:100%;
        z-index: 10;
        height: 175px;
        overflow: hidden;
        ${({ isDisplayed }) => isDisplayed && `height:0; opacity:0;`}
    }
`;

const List = styled.ul`
    margin-right: 1.5em;
    list-style-type: none;
    display: flex;

    @media (max-width: 620px) {
      flex-direction: column;
    }
`;

const ListItem = styled.li`
    margin-left: 1.5em;
`;

const NavigationLink = styled.div`
    color: var(--clr-fg);
    font-weight: 500;
    ${Link}
    cursor: pointer;
`;

const ThemeToggleButton = styled.div`
margin-left: 1em;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export default Navbar