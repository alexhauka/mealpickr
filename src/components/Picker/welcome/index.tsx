import React from 'react';
import { Container, Description } from './styles';

const Welcome: React.FC = () => {

  return (
    <Container>
    <Description style={{textAlign: 'center', lineHeight: "1.5em"}}>
      Welcome to mealpickr!<br />Use the first 3 buttons below to filter meal results. From left to right: intolerances, dietary restrictions, and cuisines. When you've set your parameters, click the checkmark to get a recipe!
    </Description>
    </Container>
  )

}

export default Welcome;