import React, { useState } from 'react';
import { Container, Description } from './styles';

const intolerancesArray: string[] = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree-nut", "wheat"];

let checkedIntolerances: string[] = [];





const Intolerances: React.FC = () => {

  const [intolerances, setIntolerances] = useState(checkedIntolerances)

  function handleCheckIntolerances(event: React.ChangeEvent<HTMLInputElement>) {
  
    if (event.target.checked === true) {
      checkedIntolerances.push(event.target.name)
    } else {
      // event.target.checked = false;
      const i = checkedIntolerances.indexOf(event.target.name);
      checkedIntolerances.splice(i, 1);
    }
    setIntolerances(checkedIntolerances);
    
  }

  return (
    <Container>
      <ul className="columns">
      {intolerancesArray.map((item: string, index: number) => <li
      
      key={index}
      className="intolerances-list">
      <input
      name={item}
      type="checkbox"
      // checked={checkedIntolerances.includes(item) ? true : false}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckIntolerances(e);
        console.log(intolerances);
        // console.log(check)
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