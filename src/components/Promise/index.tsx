import React from 'react';
import { MiscContainer, ParagraphDescription } from '../reusables';

const About: React.FC = () => {
  return (
    <>
      <MiscContainer>
        <ParagraphDescription>
          As someone who's incredibly offput by the practices of data collection in the online world, I chose to make this app as clean and safe as possible for the user. I have no control over third party collection from Google and/or the company that provides your internet and can't do anything about that. But for the scope of mealpickr, no data or personal information is collected or stored.
          <br /> Happy eating!
        </ParagraphDescription>
      </MiscContainer>
    </>
  );
}

export default About;