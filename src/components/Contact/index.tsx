import React from 'react';
import { ParentContainer } from '../reusables';
import { ContactInfo, ContactButton } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <ParentContainer>
        <ContactInfo>
          <ContactButton href="http://github.com/alexhauka">Github</ContactButton>
          <br />
          <ContactButton href="mailto:alexhauka@gmail.com">Email</ContactButton>
        </ContactInfo>
      </ParentContainer>
    </>
  );
}

export default Contact;