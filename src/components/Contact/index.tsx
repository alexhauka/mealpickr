import React from 'react';
import { MiscContainer } from '../reusables';
import { ContactInfo, ContactButton } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <MiscContainer>
        <ContactInfo>
          <ContactButton href="http://github.com/alexhauka">Github</ContactButton>
          <br />
          <ContactButton href="mailto:alexhauka@gmail.com">Email</ContactButton>
        </ContactInfo>
      </MiscContainer>
    </>
  );
}

export default Contact;