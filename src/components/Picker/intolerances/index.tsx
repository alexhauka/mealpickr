import React, { useEffect, useState } from 'react';
import { Container, Description } from './styles';

const intolerancesArray: string[] = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree-nut", "wheat"];

let checkedIntolerances: string[] = [];

interface itemCheck {
  [name: string]: {
    [key: string]: boolean
  }
}

interface props {
  intolerances: {},
  liftIntolerances: any;
}


const Intolerances: React.FC<props> = ({intolerances, liftIntolerances}) => {


  const [itemChecks, setItemChecks] = useState<itemCheck>({...intolerances})

  function handleCheckIntolerances(event: React.ChangeEvent<HTMLInputElement>) {

    if (event.target.checked === true) {
      checkedIntolerances.push(event.target.name)
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: true }
      })
    } else {
      const i = checkedIntolerances.indexOf(event.target.name);
      checkedIntolerances.splice(i, 1);
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: false }
      })
    }
    
  }
  
  useEffect(() => {
    liftIntolerances(itemChecks);
  })

  return (
    <Container>
      <Description style={{textAlign: 'center'}}>
        I'm intolerant/allergic to:
      </Description>
      <ul className="columns">
      {intolerancesArray.map((item: string, index: number) => <li
      key={index}
      className="intolerances-list">
      <input
      className="larger"
      name={item}
      type="checkbox"
      checked={itemChecks[item].isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckIntolerances(e);
      }}
      value={item}/>
        &nbsp;{item}
      </li>
      )}
      </ul>

    </Container>

  );

}

export default Intolerances;