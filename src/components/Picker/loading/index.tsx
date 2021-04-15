import React from 'react';
import { Container, Description } from './styles';

const Loading: React.FC = () => {

  return (
    <Container>
    <Description style={{textAlign: 'center'}}>
      Loading meals....
    </Description>
    </Container>
  )

}

export default Loading;