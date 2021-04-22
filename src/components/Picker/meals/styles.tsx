import styled from 'styled-components';
import { ParagraphDescription } from '../../reusables';
import { media } from '../../../styles/media';


export const Image = styled.img`
  border-radius: 25px;
  margin: 3%;
  min-width: 90%;
  max-width: 90%;

  ${media.greaterThan('small')`
    margin: 1%;
    min-width: 80%;
    max-width: 80%;
  `};

  ${media.greaterThan('large')`
    border-radius: 25px;
    margin: 0%;
    margin-top: 2%;
    min-width: 50%;
    max-width: 50%;
  `};
`;

export const MealDescription = styled(ParagraphDescription)`
  margin-bottom: 10%;
  min-height: 2.5em;
  max-height: 2.5em;
  font-size: .8em;

  ${media.greaterThan('small')`
    font-size: 1.5em;
  `};

  ${media.greaterThan('large')`
    padding: 0;
    min-height: 5%;
    max-height: 5%;
    max-width: 60%;
    font-size: 2em;
  `};
`;

export const RecipeButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.greaterThan('small')`
    font-size: 1.16em;
  `};

  ${media.greaterThan('medium')`
    font-size: 1.5em;
  `};

  ${media.greaterThan('large')`
  `};

  
`;

export const RecipeButton = styled.button`
  width: 10em;
  height: 3em;
  margin: 0%;
  padding: 10%;
  background-color: white;
  color: black;
  border: 0px solid white;
  border-radius: 25px;
  cursor: pointer;

  ${media.greaterThan('large')`
    width: 165px;
    height: 150px;
    position: relative;
    top: 50px;
    z-index: 1;
    color: #FFF;
    background-color: #ffffff00;
    border: 2px solid #FFF;
    border-radius: 50%;
    padding: 30% 25% 25% 25%;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 0px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #FFF;
    -webkit-transition: ease-out 0.2s;
    -moz-transition: ease-out 0.3s;
    transition: ease-out 0.3s;

    :hover {
      color: black;
      box-shadow: inset 0 150px 0 0 #FFF;
    }
  `};
`;
