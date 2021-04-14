import React from 'react';
import { Container, Description } from './styles';

const intolerancesArray = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];



const Intolerances: React.FC = () => {

  return (
    <Container>
      <ul className="columns">
      {intolerancesArray.map((item, index: number) => <li
      key={index}
      className="intolerances-list">
      <input
      type="checkbox"
      className="larger"
      value={item}/>
        &nbsp;{item}
      </li>
      )}
      </ul>
      <Description style={{textAlign: 'center'}}>
        Select any intolerances to remove them from your results
      </Description>
    </Container>

  );

}

export default Intolerances;