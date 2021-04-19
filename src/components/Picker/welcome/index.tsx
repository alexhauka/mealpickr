import React from 'react';
import { ChildContainer, ParagraphDescription } from '../../reusables';

const Welcome: React.FC = () => {

  return (
    <ChildContainer>
    <ParagraphDescription>
      Welcome to mealpickr!<br />Use the buttons below to filter meal results. From left to right: intolerances, dietary restrictions, and cuisine. When you've set your parameters, click the checkmark to get a recipe!
    </ParagraphDescription>
    </ChildContainer>
  )

}

export default Welcome;