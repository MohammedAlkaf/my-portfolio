import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import { BtnOutline, Link } from '../../styles/ReusableStyles';
// import './About.css';

const About = ({aboutRef}) => {
const { name, role, description, resume, social } = about

return (
    <Wrapper ref = {aboutRef}>
    {name && (
        <Name>
        Hi, I am <span>{name}.</span>
        </Name>
    )}

    {role && <Role>A {role}.</Role>}
    <Desc>{description && description}</Desc>

    <AboutContact className='about__contact center'>
        {resume && (
        <Resume href={resume} target="_blank">
            <ResumeLink>
                Resume
            </ResumeLink>
        </Resume>
        )}

        {social && (
        <>
            {social.github && (
            <LinkIcon
                href={social.github}
                aria-label='github'
            >
                <GitHubIcon />
            </LinkIcon>
            )}

            {social.linkedin && (
            <LinkIcon
                href={social.linkedin}
                aria-label='linkedin'
            >
                <LinkedInIcon />
            </LinkIcon>
            )}
        </>
        )}
    </AboutContact>
    </Wrapper>
)
}

const Wrapper = styled.div`
    flex-direction: column;
    margin-top: 3em;
    margin-right: 0.8em;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        align-items: flex-start;
        margin-top: 2em;
    }
`;

const Name = styled.h1`
    span{
        color: var(--clr-primary);
    }
`;

const Role = styled.h2`
    margin-top: 1.2em;
`;

const Desc = styled.p`
    font-size: 1rem;
    max-width: 600px;
`;

const Resume = styled.a`
    text-decoration:none;
`;

const ResumeLink = styled.div`
    margin-right: 1em;
    ${BtnOutline}
`;

const AboutContact = styled.div`
    margin-top: 2.4em;
    display: flex;
    align-items: center;
`;

const LinkIcon = styled.a`
    margin-right: 0.8em;
    color: var(--clr-fg);
    ${Link}
`;
export default About