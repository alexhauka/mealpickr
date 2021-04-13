import React from 'react';
import { Container, Description } from './styles';

const Welcome: React.FC = () => {

  return (
    <Container>
    <Description style={{textAlign: 'center'}}>
      Welcome to mealpickr! Use the first 3 buttons below to filter meal results. From left to right: intolerances, dietary, and cuisine. Click the 4th button for a random meal with those filters applied. When you see a meal you like, click the checkmark to get the recipe and a grocery list!
    </Description>
    </Container>
  )

}

export default Welcome;