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

  const fetchURL = 'https://api.spoonacular.com/recipes/complexSearch';
  const apiKey = process.env.REACT_APP_SPOONACULAR_API;

  function getMeals() {
    setView("Loading");
    fetch(
      `${fetchURL}?apiKey=${apiKey}&number=20`
    )
    .then(response => response.json())
    .then(data => {
      //testing
      console.log("data: ", data)
      setMeals(data.results);
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
          style: {fontSize: '4em', color: "white"}
        }}>
          <Menu>
            <ButtonGroup>
              <IoMdHeartDislike
                className="top-icon-button"
                onClick={(event: React.MouseEvent) => {view !== "Intolerances" ? setView("Intolerances") : setView("Welcome")}}
              />
              <IoIosLeaf
                className="top-icon-button"
                onClick={(event: React.MouseEvent) => {view !== "Diets" ? setView("Diets") : setView("Welcome")}}
              />
              <IoMdPizza
                className="top-icon-button"
                onClick={(event: React.MouseEvent) => {view !== "Cuisine" ? setView("Cuisine") : setView("Welcome")}}
              />
            </ButtonGroup>
          </Menu>
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