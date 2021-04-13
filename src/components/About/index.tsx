import React from 'react';
import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <p style={{textAlign: 'center'}}>
          I enjoy cooking but often feel uninspired when figuring out what exactly <i>to</i> cook, and thus mealpickr was born. It allows you to filter by intolerances (lactose, nuts, etc), dietary restrictions (vegetarian, ketogenic, etc), meal type (breakfast, dessert, etc) and allows searching recipes by cuisine (Thai, Mexican, etc). I hope you enjoy your meal as much as I enjoyed making mealpickr. <br/>-Alex Hauka
        </p>
      </Container>
    </>
  );
}

export default About;