import React from 'react';
import { ParentContainer, ParagraphDescription } from '../reusables';

const About: React.FC = () => {
  return (
    <>
      <ParentContainer>
        <ParagraphDescription>
          I enjoy cooking but often feel uninspired when figuring out what exactly <i>to</i> cook, and thus mealpickr was born. It allows you to filter by intolerances (lactose, nuts, etc), dietary restrictions (vegetarian, ketogenic, etc), and allows searching recipes by cuisine (Thai, Mexican, etc). I hope you enjoy your meal as much as I enjoyed making mealpickr. <br/>-Alex
        </ParagraphDescription>
      </ParentContainer>
    </>
  );
}

export default About;