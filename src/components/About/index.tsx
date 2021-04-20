import React from 'react';
import { MiscContainer, ParagraphDescription } from '../reusables';

const About: React.FC = () => {
  return (
    <>
      <MiscContainer>
        <ParagraphDescription>
          I really enjoy cooking but often feel uninspired when figuring out what exactly <i>to</i> cook, and thus mealpickr was born. It allows you to filter by intolerances (lactose, nuts, etc), dietary restrictions (vegetarian, ketogenic, etc), and allows searching recipes by cuisine (Thai, Mexican, etc). I hope you enjoy your meal as much as I enjoyed making mealpickr. <br/>-Alex
        </ParagraphDescription>
      </MiscContainer>
    </>
  );
}

export default About;