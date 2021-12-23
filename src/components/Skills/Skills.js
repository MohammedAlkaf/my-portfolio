import uniqid from "uniqid";
import React from "react";
import styled from "styled-components";
import { skills } from "../../portfolio";
import { BtnPlain } from "../../styles/ReusableStyles";

const Skills = ({ skillsRef }) => {

    if (!skills.length) return null;

    return (
        <Wrapper ref={skillsRef}>
            <Title>Skills</Title>
            <List>
                {skills.map((skill) => (
                    <ListItem key={uniqid()}>{skill}</ListItem>
                ))}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const List = styled.ul`
  max-width: 450px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  margin: 0.5em;
  ${BtnPlain}
`;

export default Skills;
