import React from 'react';
import { Container, Preview, Description, Menu, MenuItem } from './styles';
import PlaceholderImage from '../../assets/pizza.jpg'
import {IoIosLeaf, IoMdPizza, IoIosStar } from 'react-icons/io'
import {IconContext} from "react-icons"




const PlaceholderDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna. Cursus mattis molestie a iaculis.'

const Picker: React.FC = () => {
  return (
    <>
      <Container>
        <Preview src={PlaceholderImage}/>
        <Description>
        {PlaceholderDescription}
        </Description>
        <Menu>
          <IconContext.Provider value={{
            style: {fontSize: '30px', color: "white"}
          }}>
          <MenuItem>
            <IoIosLeaf/>
          </MenuItem>
          <MenuItem>
            <IoMdPizza />
          </MenuItem>
          <MenuItem>
            <IoIosStar />
          </MenuItem>
          </IconContext.Provider>
        </Menu>
      </Container>
    </>
  );
}

export default Picker;