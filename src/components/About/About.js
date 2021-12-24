import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from "styled-components";
import { keyframes } from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import { BtnOutline, Link } from '../../styles/ReusableStyles';
// import './About.css';

const About = ({aboutRef}) => {
const { name, role, description, resume, social, photo } = about

return (
    <Wrapper ref = {aboutRef}>

        <Container >
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
                    target="_blank"
                >
                    <GitHubIcon />
                </LinkIcon>
                )}

                {social.linkedin && (
                <LinkIcon
                    href={social.linkedin}
                    target="_blank"
                    aria-label='linkedin'
                >
                    <LinkedInIcon />
                </LinkIcon>
                )}
            </>
            )}
        </AboutContact>
        </Container>
        <Img src = {photo}/>
    </Wrapper>
)
}


const ImgslideIn = keyframes`
  0% {
    -webkit-transform: translateZ(700px) translateX(400px);
            transform: translateZ(700px) translateX(400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0);
            transform: translateZ(0) translateX(0);
    opacity: 1;
  }
}
`;

const AboutSlideIn = keyframes`
  0% {
    -webkit-transform: translateZ(700px) translateX(-400px);
            transform: translateZ(700px) translateX(-400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0);
            transform: translateZ(0) translateX(0);
    opacity: 1;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${AboutSlideIn} 1s ease-in-out both;

    @media (max-width: 600px) {
        align-items: flex-start;
        margin-top: 2em;
    }
`;

const Wrapper = styled.div`
    margin-right: 0.8em;
    display: flex;
    align-items: center;
    justify-content:center;
    height:100%;
    justify-content:center;
    @media (max-width: 800px) {
        flex-direction:column-reverse;
        height:auto;
    }
`;

const Img = styled.img`
margin: 2em;
width: 23em;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
animation: ${ImgslideIn} 1s ease-in-out both;

@media (max-width: 800px) {
    width: 15em;
    }
`;

const Name = styled.h1`
    font-size: 3em;
    span{
        color: var(--clr-primary);
    }
`;

const Role = styled.h2`
    margin-top: 1.2em;
`;

const Desc = styled.p`
    margin-top:1em;
    font-size: 1.3em;
    max-width: 600px;
    text-align: justify;
    text-justify: inter-word;
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