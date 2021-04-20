import styled from 'styled-components';
import { media } from '../../styles/media';
 
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: -webkit-fill-available;
  padding: 20%;
  
  ${media.greaterThan('large')`
    min-width: 50%;
    min-height: 40%;
    padding: 5%;
  `};
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  margin-bottom: 0;
  padding: 5%;
  background-color: white;
  color: black;
  border: 0px solid white;
  border-radius: 25px;
  cursor: pointer;

  ${media.greaterThan('small')`
    font-size: 1.16em;
  `};

  ${media.greaterThan('medium')`
    font-size: 2em;
  `};
`;