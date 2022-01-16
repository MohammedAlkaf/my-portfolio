import React from 'react';
import { useContext } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { Link } from '../../styles/ReusableStyles'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
// import './Navbar.css'

const Navbar = ({aboutRef, projectsRef, skillsRef, contactRef}) => {
const [{ themeName, toggleTheme }] = useContext(ThemeContext)

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
}
return (
    <NavWrapper className='center'>
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
        </List>

        <ThemeToggleButton
            onClick={toggleTheme}
            className='btn btn--icon nav__theme'
            aria-label='toggle theme'
        >
            {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </ThemeToggleButton>
    </NavWrapper>
)
}

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      display: none;
    }
`;

const List = styled.ul`
    margin-right: 1.5em;
    list-style-type: none;
    display: flex;
`;

const ListItem = styled.li`
    margin-left: 1.5em;
`;

const NavigationLink = styled.div`
    color: var(--clr-fg);
    font-weight: 500;
    ${Link}
`;

const ThemeToggleButton = styled.div`
cursor: pointer;
`;

export default Navbar