import React, { useState } from 'react';
import { Container, Menu } from './styles';
import Welcome from './welcome';
import Intolerances from './intolerances';

import PlaceholderImage from '../../assets/pizza.jpg'
import { IoIosLeaf, IoMdPizza, IoIosRefreshCircle, IoIosCheckmarkCircle, IoMdHeartDislike } from 'react-icons/io'
import { IconContext } from "react-icons"

const PlaceholderDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna. Cursus mattis molestie a iaculis.'

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
        <Menu>
          <IconContext.Provider value={{
            style: {fontSize: '35px', color: "white"}
          }}>
            <IoMdHeartDislike onClick={(event: React.MouseEvent) => {view !== "Intolerances" ? setView("Intolerances") : setView("Welcome")}}/>
            <IoIosLeaf />
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