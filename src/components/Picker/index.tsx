import React, { useState } from 'react';
import { ParentContainer } from '../reusables';
import { Menu, ButtonGroup } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';
import Diets from './diets';
import Cuisine from './cuisine';
import Loading from './loading';
import Meals from './meals';
import Error from './error';
import { IoIosLeaf, IoMdPizza, IoIosRefreshCircle, IoIosCheckmarkCircle, IoMdHeartDislike, IoIosCloseCircleOutline } from 'react-icons/io';
import { IconContext } from "react-icons";

const Picker: React.FC = () => {
  const [view, setView] = useState("Welcome")
  const [meals, setMeals] = useState([])
  const [mealNumber, setMealNumber] = useState(0)

  const [intolerances, setIntolerances] = useState<itemCheck>({
    "dairy":  { isChecked: false },
    "egg": { isChecked: false },
    "gluten": { isChecked: false },
    "grain": { isChecked: false },
    "peanut": { isChecked: false },
    "seafood": { isChecked: false },
    "sesame": { isChecked: false },
    "shellfish": { isChecked: false },
    "soy": { isChecked: false },
    "sulfite": { isChecked: false },
    "tree nut": { isChecked: false },
    "wheat": { isChecked: false }
  })

  const [diets, setDiets] = useState<itemCheck>({
    "gluten-free":  { isChecked: false },
    "ketogenic": { isChecked: false },
    "vegetarian": { isChecked: false },
    "lacto-vegetarian": { isChecked: false },
    "ovo-vegetarian": { isChecked: false },
    "vegan": { isChecked: false },
    "pescetarian": { isChecked: false },
    "paleo": { isChecked: false },
    "primal": { isChecked: false },
    "whole30": { isChecked: false }
  })

  const [cuisines, setCuisines] = useState<itemCheck>({
    "african":  { isChecked: false },
    "caribbean": { isChecked: false },
    "chinese": { isChecked: false },
    "french": { isChecked: false },
    "indian": { isChecked: false },
    "italian": { isChecked: false },
    "japanese": { isChecked: false },
    "mediterranean": { isChecked: false },
    "mexican": { isChecked: false },
    "middle eastern": { isChecked: false },
    "thai": { isChecked: false },
    "vietnamese": { isChecked: false }
  })
  

  interface itemCheck {
    [name: string]: {
      [key: string]: boolean
    }
  }

  // used for viewing a random meal in the results
  const max = meals.length;

  const fetchURL1 = `https://api.spoonacular.com/recipes/random`

  const fetchURL2 = `https://api.spoonacular.com/recipes/complexSearch`;

  const apiKey = process.env.REACT_APP_SPOONACULAR_API;

  function getMeals() {
    setView("Loading");
    const userIntolerances = addParameters(intolerances);
    const userDiets = addParameters(diets);
    const userCuisines = addParameters(cuisines);
    

    // if all checkboxes are empty, uses the spoonacular random recipe API endpoint:
    if (userIntolerances.length + userDiets.length + userCuisines.length === 0) {
      fetch(
        `${fetchURL1}?apiKey=${apiKey}&number=20`
      )
      .then(response => response.json())
      .then(data => {
        if (data.recipes.length > 0) {
          setMeals(data.recipes);
          setMealNumber(Math.floor(Math.random() * max));
          setView("Meals");
        } else {
          setView("Error");
        }
      })
      .catch(() => {
        setView("Error");
        console.error("error getting meals")
      })

    // otherwise, uses complex search  
    } else {
      console.log(`${fetchURL2}?apiKey=${apiKey}&number=20&intolerances=${userIntolerances}&diet=${userDiets}&cuisine=${userCuisines}&addRecipeInformation=true`)
      fetch(
        `${fetchURL2}?apiKey=${apiKey}&number=20&intolerances=${userIntolerances}&diet=${userDiets}&cuisine=${userCuisines}&addRecipeInformation=true`
      )
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setMeals(data.results);
          setMealNumber(Math.floor(Math.random() * max));
          setView("Meals");
        } else {
          setView("Error");
        }
      })
      .catch(() => {
        setView("Error");
        console.error("error getting meals")
      })
    }

  };
  
  // returns a random meal id for the "meals" view
  function randomMealID() {
    const currentNumber = mealNumber;
    const nextNumber = Math.floor(Math.random() * max);
    nextNumber === currentNumber ? setMealNumber(Math.floor(Math.random() * max)) : setMealNumber(nextNumber);
    
  }

  // adds user parameters to the query (fetchURL2)
  function addParameters(filters: itemCheck) {
    let addedFilters = '';
    for (const item in filters) {
      if (filters[item].isChecked) {
        addedFilters += `${item},`
      }
    }
    return addedFilters;
  }


  return (
    <>
      <ParentContainer>
        {view === "Welcome" && 
        <>
          <Welcome />
        </>}
        {view === "Intolerances" && 
        <>
          <Intolerances
            intolerances={intolerances}
            liftIntolerances={setIntolerances}
          />
        </>}
        {view === "Diets" && 
        <>
          <Diets
            diets={diets}
            liftDiets={setDiets}
          />
        </>}
        {view === "Cuisine" && 
        <>
          <Cuisine
            cuisines={cuisines}
            liftCuisines={setCuisines}
          />
        </>}
        {view === "Loading" && 
        <>
          <Loading />
        </>}
        {view === "Meals" && 
        <>
          <Meals meal={meals[mealNumber]}/>
        </>}
        {view === "Error" &&
        <>
          <Error />
        </>
        }
        <IconContext.Provider value={{
          style: {fontSize: '4em', color: "white", cursor: "pointer"}
        }}>
          {view !== "Meals" &&
            <Menu>
              <ButtonGroup>
                <IoMdHeartDislike
                  className={view === "Intolerances" ? "top-icon-button-selected" : "top-icon-button"}
                  onClick={(event: React.MouseEvent) => {view !== "Intolerances" ? setView("Intolerances") : setView("Welcome")}}
                />
                <IoIosLeaf
                  className={view === "Diets" ? "top-icon-button-selected" : "top-icon-button"}
                  onClick={(event: React.MouseEvent) => {view !== "Diets" ? setView("Diets") : setView("Welcome")}}
                />
                <IoMdPizza
                  className={view === "Cuisine" ? "top-icon-button-selected" : "top-icon-button"}
                  onClick={(event: React.MouseEvent) => {view !== "Cuisine" ? setView("Cuisine") : setView("Welcome")}}
                />
              </ButtonGroup>
            </Menu>
          }
          {view !== ("Meals" || "Error") &&
            <IoIosCheckmarkCircle 
              onClick={(event: React.MouseEvent) => {getMeals()}}
            />
            }
          <ButtonGroup>
            {view === "Meals" &&
            <>
            <IoIosCloseCircleOutline
              onClick={(event: React.MouseEvent) => {setView("Welcome")}}
            />
            <IoIosRefreshCircle
              onClick={(event: React.MouseEvent) => {randomMealID()}}
            />
            </>
            }
            {view === "Error" &&
            <>
              <IoIosCloseCircleOutline
              onClick={(event: React.MouseEvent) => {setView("Welcome")}}
            />
            </>
            }
            
          </ButtonGroup>
        </IconContext.Provider>
      </ParentContainer>
    </>
  );
}

export default Picker;