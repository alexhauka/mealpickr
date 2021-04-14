import React, { useState } from 'react';
import { Container, Menu } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';
import Diets from './diets';
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
        <Menu>
          <IconContext.Provider value={{
            style: {fontSize: '35px', color: "white"}
          }}>
            <IoMdHeartDislike onClick={(event: React.MouseEvent) => {view !== "Intolerances" ? setView("Intolerances") : setView("Welcome")}}/>
            <IoIosLeaf onClick={(event: React.MouseEvent) => {view !== "Diets" ? setView("Diets") : setView("Welcome")}}/>
            <IoMdPizza />
            <IoIosRefreshCircle/>
            <IoIosCheckmarkCircle />
          </IconContext.Provider>
        </Menu>
      </Container>
    </>
  );
}

export default Picker;