import React, { useEffect, useState } from 'react';
import { ChildContainer, ChildDescription } from '../../reusables';

const dietArray = ["gluten-free", "ketogenic", "vegetarian", "lacto-vegetarian", "ovo-vegetarian", "vegan", "pescetarian", "paleo", "primal", "whole30"];

let checkedDiets: string[] = [];

interface itemCheck {
  [name: string]: {
    [key: string]: boolean
  }
}

interface props {
  diets: {},
  liftDiets: any;
}

const Diets: React.FC<props> = ({diets, liftDiets}) => {

  const [itemChecks, setItemChecks] = useState<itemCheck>({...diets})

  function handleCheckDiets(event: React.ChangeEvent<HTMLInputElement>) {

    if (event.target.checked === true) {
      checkedDiets.push(event.target.name)
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: true }
      })
    } else {
      const i = checkedDiets.indexOf(event.target.name);
      checkedDiets.splice(i, 1);
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: false }
      })
    }
    
  }

  useEffect(() => {
    liftDiets(itemChecks);
  })

  return (
    <ChildContainer>
      <ChildDescription style={{textAlign: 'center'}}>
        I only want recipes that are:
      </ChildDescription>
      <ul className="columns-diets">
      {dietArray.map((item: string, index: number) => <li
      key={index}
      className="diets-list">
      <input
      className="larger"
      name={item}
      type="checkbox"
      checked={itemChecks[item].isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckDiets(e);
      }}
      value={item}/>
        &nbsp;{item}
      </li>
      )}
      </ul>
      
    </ChildContainer>

  );

}

export default Diets;