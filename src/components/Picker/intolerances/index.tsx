import React, { useEffect, useState } from 'react';
import { Container, Description } from './styles';

const intolerancesArray: string[] = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "TreeNut", "Wheat"];

let checkedIntolerances: string[] = [];

function handleCheckIntolerances(event: React.ChangeEvent<HTMLInputElement>) {
  
  if (event.target.checked === true) {
    checkedIntolerances.push(event.target.name)
  } else {
    event.target.checked = false;
    const i = checkedIntolerances.indexOf(event.target.name);
    checkedIntolerances.splice(i, 1);
  }
}



const Intolerances: React.FC = () => {

  const [intolerances, setIntolerances] = useState(checkedIntolerances)

  return (
    <Container>
      <ul className="columns">
      {intolerancesArray.map((item: any, index: number) => <li
      
      key={index}
      className="intolerances-list">
      <input
      name={item}
      type="checkbox"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckIntolerances(e);
        setIntolerances(checkedIntolerances);
        console.log(intolerances);
      }}
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