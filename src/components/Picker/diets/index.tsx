import React from 'react';
import { Container, Description } from './styles';

const dietArray = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Veggie", "Ovo-Veggie", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"];



const Diets: React.FC = () => {

  return (
    <Container>
      <ul className="columns">
      {dietArray.map((item, index: number) => <li
      key={index}
      className="diets-list">
      <input
      type="checkbox"
      className="larger"
      value={item}/>
        &nbsp;{item}
      </li>
      )}
      </ul>
      <Description style={{textAlign: 'center'}}>
        Select any dietary restrictions to apply to your results
      </Description>
    </Container>

  );

}

export default Diets;