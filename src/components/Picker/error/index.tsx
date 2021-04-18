import React from 'react';
import { Container, Description } from './styles';

const Error: React.FC = () => {

  return (
    <Container>
      <Description>
        Sorry, no meal were found with those filters. Please remove some and try again.
      </Description>
    </Container>
  )
}

export default Error;