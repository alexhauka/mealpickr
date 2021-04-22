import styled from 'styled-components';
import { media } from '../../styles/media';
 
export const Container = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 0%;
  height: 10%;
  width: 100%;
  color: #F1F1F1;

  ${media.greaterThan('medium')`
    margin-bottom: 2%;
  `};
`;
 
export const FooterNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  ${media.greaterThan('large')`
    justify-content: space-evenly;
  `};
`;
 
export const FooterNavItem = styled.div`
  margin: 0%;
  font-size: 1em;

  ${media.greaterThan('small')`
    margin: 4.5%;
    font-size: 1.5em;
  `};

  
`;