import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FooterNav, FooterNavItem } from './styles';

const copyrightDate = new Date().getFullYear();
 
const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <FooterNav>
          <FooterNavItem>&#169; {copyrightDate}</FooterNavItem>
          <FooterNavItem>
            <Link to="/privacy">Privacy Promise</Link>
            
            </FooterNavItem>
        </FooterNav>
      </Container>
    </>
  );
}
 
export default Footer;