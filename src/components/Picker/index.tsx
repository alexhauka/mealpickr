import React, { useState } from 'react';
import { Container, Menu, ButtonGroup } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';
import Diets from './diets';
import Cuisine from './cuisine';
import Loading from './loading';
import Meals from './meals';
import { IoIosLeaf, IoMdPizza, IoIosRefreshCircle, IoIosCheckmarkCircle, IoMdHeartDislike, IoIosCloseCircleOutline } from 'react-icons/io'
import { IconContext } from "react-icons"

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
    "tree-nut": { isChecked: false },
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
  

  interface itemCheck {
    [name: string]: {
      [key: string]: boolean
    }
  }


  const max = meals.length;

  const fetchURL2 = `https://api.spoonacular.com/recipes/random`;

  const apiKey = process.env.REACT_APP_SPOONACULAR_API;

  function getMeals() {
    setView("Loading");
    fetch(
      `${fetchURL2}?apiKey=${apiKey}&number=20&tags=`
    )
    .then(response => response.json())
    .then(data => {
      //testing
      console.log("data: ", data)
      setMeals(data.recipes);
      setView("Meals");
      console.log("meals: ", meals)
    })
    .catch(() => {
      console.error("error getting meals")
    })

  };

  function randomMealID() {
    setMealNumber(Math.floor(Math.random() * max));
  }


  return (
    <>
      <Container>
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
          <Cuisine />
        </>}
        {view === "Loading" && 
        <>
          <Loading />
        </>}
        {view === "Meals" && 
        <>
          <Meals meal={meals[mealNumber]}/>
        </>}
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
            {view !== "Meals" &&
            <IoIosCheckmarkCircle 
              onClick={(event: React.MouseEvent) => {getMeals()}}
            />
            }
          </ButtonGroup>
        </IconContext.Provider>
      </Container>
    </>
  );
}

export default Picker;