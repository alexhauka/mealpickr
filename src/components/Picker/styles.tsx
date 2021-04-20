import styled from 'styled-components';
import { media } from '../../styles/media';

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 90%;

  ${media.greaterThan('small')`
    min-width: 75%;
  `};
`;

export const ParameterButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5em;

  ${media.greaterThan('small')`
    height: 4em;
    margin: 5%;
  `};
`;

export const CheckmarkButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5em;
  font-size: 1.5em;

  ${media.greaterThan('small')`
    height: 4em;
    margin-top: 5%;
    font-size: 1.8em;
  `};
`;

export const MealButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 10%;

  ${media.greaterThan('small')`
    font-size: 1.5em;
  `};
`;

