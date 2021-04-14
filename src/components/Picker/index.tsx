import React, { useState } from 'react';
import { Container, Menu, ButtonGroup } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';
import Diets from './diets';
import Cuisine from './cuisine';
import { IoIosLeaf, IoMdPizza, IoIosRefreshCircle, IoIosCheckmarkCircle, IoMdHeartDislike } from 'react-icons/io'
import { IconContext } from "react-icons"

const spoonacularAPI = process.env.SPOONACULAR_API

const Picker: React.FC = () => {
  const [view, setView] = useState("Welcome")
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
        <Menu>
          <IconContext.Provider value={{
            style: {fontSize: '4em', color: "white"}
          }}>
            <ButtonGroup>
              <IoMdHeartDislike className="top-icon-button" onClick={(event: React.MouseEvent) => {view !== "Intolerances" ? setView("Intolerances") : setView("Welcome")}}/>
              <IoIosLeaf className="top-icon-button" onClick={(event: React.MouseEvent) => {view !== "Diets" ? setView("Diets") : setView("Welcome")}}/>
              <IoMdPizza className="top-icon-button" onClick={(event: React.MouseEvent) => {view !== "Cuisine" ? setView("Cuisine") : setView("Welcome")}}/>
            </ButtonGroup>
          </IconContext.Provider>
        </Menu>
        <Menu>
          <IconContext.Provider value={{
              style: {fontSize: '35px', color: "white"}
            }}>
            <IoIosRefreshCircle/>
            <IoIosCheckmarkCircle />
          </IconContext.Provider>
        </Menu>
      </Container>
    </>
  );
}

export default Picker;