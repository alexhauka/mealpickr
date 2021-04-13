import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, MenuItem } from './styles';
 
const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          <Link to="/">mealpickr</Link>
        </Logo>
        <Menu>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">Contact</Link>
          </MenuItem>
        </Menu>
      </Container>
    </>
  );
}
 
export default Navbar;