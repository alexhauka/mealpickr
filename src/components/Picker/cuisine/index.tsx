import React from 'react';
import { Container, Description } from './styles';

const cuisineArray = ["African", "Caribbean", "Chinese", "French", "Indian", "Italian", "Japanese", "Mediterranean", "Mexican", "Middle-East", "Thai", "Vietnamese"];



const Cuisine: React.FC = () => {

  return (
    <Container>
      <ul className="columns">
      {cuisineArray.map((item, index: number) => <li
      key={index}
      className="cuisine-list">
      <input
      type="checkbox"
      className="larger"
      value={item}/>
        &nbsp;{item}
      </li>
      )}
      </ul>
      <Description style={{textAlign: 'center'}}>
        Select any cuisines to apply to your results
      </Description>
    </Container>

  );

}

export default Cuisine;