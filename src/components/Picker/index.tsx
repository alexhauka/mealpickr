import React from 'react';
import { Container, Preview, Options } from './styles';
import PlaceholderImage from '../../assets/pizza.jpg'

const Picker: React.FC = () => {
  return (
    <>
      <Container>
        <Preview src={PlaceholderImage}/>
        <Options>
          options buttons goes here
        </Options>
      </Container>
    </>
  );
}

export default Picker;