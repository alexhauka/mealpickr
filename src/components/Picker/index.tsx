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
  
  const max = meals.length;

  // complex search:
  const fetchURL1 = 'https://api.spoonacular.com/recipes/complexSearch';
  // random search:
  const fetchURL2 = `https://api.spoonacular.com/recipes/random`;
  const apiKey = process.env.REACT_APP_SPOONACULAR_API;

  function getMeals() {
    setView("Loading");
    fetch(
      `${fetchURL2}?apiKey=${apiKey}&number=20&tags=lacto-vegetarian&tree-nut`
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
          <Intolerances />
        </>}
        {view === "Diets" && 
        <>
          <Diets />
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