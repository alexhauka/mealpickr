import styled from 'styled-components';
import { ParagraphDescription } from '../../reusables';



export const Image = styled.img`
  border-radius: 25px;
  margin: 5%;
  min-width: 90%;
  max-width: 90%;
`;

export const MealDescription = styled(ParagraphDescription)`
  min-height: 5em;
  max-height: 5em;
`;

export const MealButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const RecipeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 3em;
  margin: 5%;
  padding: 1%;
  background-color: white;
  color: black;
  border: 0px solid white;
  border-radius: 25px;
  cursor: pointer;
`;
