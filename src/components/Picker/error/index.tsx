import React from 'react';
import { ChildContainer, ChildDescription } from '../../reusables';

const Error: React.FC = () => {

  return (
    <ChildContainer>
      <ChildDescription>
        Sorry, no meal were found with those parameters. Please remove some and try again.
      </ChildDescription>
    </ChildContainer>
  )
}

export default Error;