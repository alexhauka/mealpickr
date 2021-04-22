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

  ${media.greaterThan('large')`
    margin-top: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};

  
  
`;

export const ParameterButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 90%;
  max-width: 90%;
  min-height: 4rem;
  max-height: 4rem;

  ${media.greaterThan('small')`
    height: 3em;
    margin: 5%;
  `};

  ${media.greaterThan('medium')`
    height: 5.5em;
    margin-top: 15%;
  `};

  ${media.greaterThan('large')`
    display: none;
  `};
`;

export const LargeMediaParameterButtonGroup = styled.div`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10%;
    padding: 1%;
    border: 0px;
    border-style: double;
    border-radius: 0em;
  `};

`;

export const LargeMediaParameterButton = styled.button`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    color: #FFF;
    background-color: #ffffff00;
    border: 2px solid #FFF;
    border-radius: 10px;
    padding: 18px 36px;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #FFF;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;

    :hover {
      color: black;
      box-shadow: inset 0 100px 0 0 #FFF;
    }
  `};
`;

export const CheckmarkButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5em;
  font-size: 1.5em;

  ${media.greaterThan('small')`
    height: 6em;
    margin-top: 0%;
    font-size: 1.5em;
  `};

  ${media.greaterThan('large')`
    display: none;
  `};
`;

export const LargeMediaCheckMarkButtonGroup = styled.div`
    display: none;

    ${media.greaterThan('large')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
`;

export const LargeMediaCheckMarkButton = styled.button`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20%;
    margin-bottom: 60%;
    color: #FFF;
    background-color: #ffffff00;
    border: 2px solid #FFF;
    border-radius: 50%;
    padding: 50% 17%;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 0px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #FFF;
    -webkit-transition: ease-out 0.2s;
    -moz-transition: ease-out 0.2s;
    transition: ease-out 0.2s;

    :hover {
      color: black;
      box-shadow: inset 0 130px 0 0 #FFF;
    }
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

  ${media.greaterThan('large')`
    display: none;
  `};
`;

export const LargeMealButtonGroup = styled.div`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 60%;
    margin-bottom: 10%;
  `};
`;

export const LargeMealButton = styled.button`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25%;
    color: #FFF;
    background-color: #ffffff00;
    border: 2px solid #FFF;
    border-radius: 10px;
    padding: 18px 36px;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #FFF;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;

    :hover {
      color: black;
      box-shadow: inset 0 100px 0 0 #FFF;
    }
  `}

  `;

  export const LargeErrorContainer = styled.div`
    
    ${media.greaterThan('large')`
      display: none;
    `};
  
  `;

