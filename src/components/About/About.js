import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import uniqid from 'uniqid'
import styled from "styled-components";
import { keyframes } from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import { BtnOutline, Link } from '../../styles/ReusableStyles';
import Atropos from 'atropos/react';
import "atropos/atropos.css";


const About = ({aboutRef}) => {
    const { name, role, description, resume, social, photo } = about;

    return (
        <Wrapper ref = {aboutRef}>
            <Container >
                {name && (
                    <Name>
                    Hi, I am <span>{name}.</span>
                    </Name>
                )}

                {role && <Role>A {role}.</Role>}
                <Desc>{description && description.split('\n').map(str => <p key={uniqid()} ><br/>{str}</p>) }</Desc>

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
            <ImageContainer className="atropos">
                <Img src={photo}/>
            </ImageContainer>
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
    /* margin-right: 0.8em; */
    display: flex;
    align-items: center;
    justify-content:center;
    height:600px;
    justify-content:center;
    @media (max-width: 1000px) {
        flex-direction:column-reverse;
        height:auto;
    }
`;

const ImageContainer = styled(Atropos)`
    width: 500px;
    margin:25px;
    @media (max-width: 1000px) {
        width: 80%;
}
`;

const Img = styled.img`
width: 100%;
animation: ${ImgslideIn} 1s ease-in-out both;
`;

const Name = styled.h1`
    font-size: 3em;
    span{
        color: var(--clr-primary);
    }
`;

const Role = styled.h2`
    margin-top: 10px;
`;

const Desc = styled.div`
    padding: 5px;
    font-size: 1.2em;
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