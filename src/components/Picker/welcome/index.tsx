import React from 'react';
import { ChildContainer } from '../../reusables';
import { WelcomeDescription } from './styles';

const Welcome: React.FC = () => {

  return (
    <ChildContainer>
    <WelcomeDescription>
      Welcome to mealpickr!<br />Use the buttons below to filter meal results. From left to right: intolerances, dietary restrictions, and cuisine. When you've set your parameters, click the checkmark to get a recipe!
    </WelcomeDescription>
    </ChildContainer>
  )

}

export default Welcome;