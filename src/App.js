import React, { useRef } from "react";
import styled from "styled-components";
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import GlobalStyles from "./styles/GlobalStyles";
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  return (
    <Wrapper id='top' className={`${themeName}`}>
      <GlobalStyles/>
      <Header aboutRef = {aboutRef}  projectsRef = {projectsRef} skillsRef = {skillsRef} contactRef = {contactRef}/>

      <Main>
        <About aboutRef = {aboutRef}/>
        <Projects projectsRef = {projectsRef}/>
        <Skills skillsRef = {skillsRef}/>
        <Contact contactRef = {contactRef}/>
      </Main>

      <ScrollToTop />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  color: var(--clr-fg);
  background: var(--clr-bg);
  transition: background 0.5s ease;
`;

const Main = styled.main`
  max-width: 100vw;
  width: 95%;
  margin: 0 auto;
  overflow: auto;
  height: calc( 100vh - 3em);

  @media (max-width: 800px) {
    height: calc( 100vh - 2em);
  }
  
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;

export default App