import React, { useEffect, useState } from 'react';
import { Container, Description } from './styles';

const cuisineArray: string[] = ["african", "caribbean", "chinese", "french", "indian", "italian", "japanese", "mediterranean", "Mexican", "middle-eastern", "thai", "vietnamese"];

let checkedCuisines: string[] = [];

interface itemCheck {
  [name: string]: {
    [key: string]: boolean
  }
}

interface props {
  cuisines: {},
  liftCuisines: any;
}

const Cuisine: React.FC<props> = ({cuisines, liftCuisines}) => {

  const [itemChecks, setItemChecks] = useState<itemCheck>({...cuisines})

  function handleCheckCuisines(event: React.ChangeEvent<HTMLInputElement>) {

    if (event.target.checked === true) {
      checkedCuisines.push(event.target.name)
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: true }
      })
    } else {
      const i = checkedCuisines.indexOf(event.target.name);
      checkedCuisines.splice(i, 1);
      setItemChecks({
        ...itemChecks,
        [event.target.name]: { isChecked: false }
      })
    }
    
  }

  useEffect(() => {
    liftCuisines(itemChecks);
  })

  return (
    <Container>
      <ul className="columns">
      {cuisineArray.map((item: string, index: number) => <li
      key={index}
      className="cuisine-list">
      <input
      className="larger"
      name={item}
      type="checkbox"
      checked={itemChecks[item].isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckCuisines(e);
      }}
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