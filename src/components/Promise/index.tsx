import React from 'react';
import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <p style={{textAlign: 'center'}}>
          As someone who's incredibly offput by the practices of data collection in the online world, I chose to make this app as clean and safe as possible for the user. I have no control over third party collection from Google and/or the company that provides your internet and can't do anything about that. But for the scope of mealpickr, I made it so no cookies are used or stored, and no data or personal information is collected from my end. Happy eating!
        </p>
      </Container>
    </>
  );
}

export default About;