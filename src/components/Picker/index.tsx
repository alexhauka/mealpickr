import React, { useState } from 'react';
import { Container, Menu, ButtonGroup } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';
import Diets from './diets';
import Cuisine from './cuisine';
import { IoIosLeaf, IoMdPizza, IoIosRefreshCircle, IoIosCheckmarkCircle, IoMdHeartDislike } from 'react-icons/io'
import { IconContext } from "react-icons"

const Picker: React.FC = () => {
  const [view, setView] = useState("Welcome")
  const [meals, setMeals] = useState(null)

  const fetchURL = 'https://api.spoonacular.com/recipes/complexSearch';
  const apiKey = process.env.REACT_APP_SPOONACULAR_API;

  function getMeals() {

    fetch(
      `${fetchURL}?apiKey=${apiKey}`
    )
    .then(response => response.json())
    .then(data => {
      //testing
      console.log("data: ", data)
      setMeals(data.results)
      console.log("meals: ", meals)
    })
    .catch(() => {
      console.error("error getting meals")
    })

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
            <IoIosRefreshCircle
              onClick={(event: React.MouseEvent) => {getMeals()}}
            />
            <IoIosCheckmarkCircle />
          </ButtonGroup>
        </IconContext.Provider>
      </Container>
    </>
  );
}

export default Picker;