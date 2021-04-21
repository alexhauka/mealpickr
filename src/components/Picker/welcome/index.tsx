import React from 'react';
import { ChildContainer } from '../../reusables';
import { WelcomeDescription, LargeWelcomeDescription } from './styles';

const Welcome: React.FC = () => {

  return (
    <ChildContainer>
    <WelcomeDescription>
      Welcome to mealpickr!<br />Use the buttons below to filter meal results. From left to right: intolerances, dietary restrictions, and cuisine. Once you've set your parameters, click the checkmark to get a recipe!
    </WelcomeDescription>
    <LargeWelcomeDescription>
      Welcome to mealpickr!<br />Use the 3 buttons below to filter meal results by any intolerances, dietary restrictions, or cuisines you may desire. Once your parameters are set, click the bottom button and mealpickr will grab a handful of random recipes for you!
    </LargeWelcomeDescription>
    </ChildContainer>
  )

}

export default Welcome;