import React, { useEffect, useState } from 'react';
import { Container, Description } from './styles';

const intolerancesArray: string[] = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree-nut", "wheat"];

let checkedIntolerances: string[] = [];

// const intolerancesObject: {[index: string]:any} = {
//   dairy:  { isChecked: false },
//   egg: { isChecked: false },
//   gluten: { isChecked: false },
//   grain: { isChecked: false },
//   peanut: { isChecked: false },
//   seafood: { isChecked: false },
//   sesame: { isChecked: false },
//   shellfish: { isChecked: false },
//   soy: { isChecked: false },
//   sulfite: { isChecked: false },
//   "tree-nut": { isChecked: false },
//   wheat: { isChecked: false }
// }

interface itemCheck {
  [name: string]: {
    [key: string]: boolean
  }
}


const Intolerances: React.FC = () => {

  const [intolerances, setIntolerances] = useState(checkedIntolerances)

  const [itemChecks, setItemChecks] = useState<itemCheck>({
    dairy:  { isChecked: false },
    egg: { isChecked: false },
    gluten: { isChecked: false },
    grain: { isChecked: false },
    peanut: { isChecked: false },
    seafood: { isChecked: false },
    sesame: { isChecked: false },
    shellfish: { isChecked: false },
    soy: { isChecked: false },
    sulfite: { isChecked: false },
    "tree-nut": { isChecked: false },
    wheat: { isChecked: false }
  })

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
    setIntolerances(checkedIntolerances);
    console.log(intolerances)
  }
  
    // useEffect(() => {
      
    // }, [intolerances, itemChecks])

  return (
    <Container>
      <ul className="columns">
      {intolerancesArray.map((item: string, index: number) => <li
      
      key={index}
      className="intolerances-list">
      <input
      name={item}
      type="checkbox"
      checked={itemChecks[item].isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckIntolerances(e);
        // console.log(intolerances);
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