import React from 'react';
import { contact } from '../../portfolio';
import styled from 'styled-components';
// import './Contact.css';
import { BtnOutline } from '../../styles/ReusableStyles';

const Contact = ({contactRef}) => {
  if (!contact.email) return null;

  return (
    <Wrapper ref = {contactRef}>
      <Header>Contact</Header>
      <Email href={`mailto:${contact.email}`} target="_blank" >
        <EmailMeButton>
          Email me
        </EmailMeButton>
      </Email>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5em 0;
`;

const Email = styled.a`
  text-decoration:none;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const EmailMeButton  = styled.div`
${BtnOutline}
`;
export default Contact