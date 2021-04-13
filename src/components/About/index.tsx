import React from 'react';
import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <p>
          I enjoy cooking but often feel uninspired when figuring out what exactly <i>to</i> cook, and thus mealpickr was born. It allows you to filter by certain dietary restrictions (vegetarian, keto, etc), and allows searching recipes by locale (Thai, Mexican, etc). I hope you enjoy your meal as much as I enjoyed making mealpickr. -Alex Hauka
        </p>
      </Container>
    </>
  );
}

export default About;