import React, { useState } from 'react';
import { Container, Description } from './styles';

const Intolerances: React.FC = () => {

  return (
    <Container>
      <input type="checkbox"/>
      <Description style={{textAlign: 'center'}}>
        Check off any intolerances to remove them from your results
      </Description>
    </Container>

  );

}

export default Intolerances;