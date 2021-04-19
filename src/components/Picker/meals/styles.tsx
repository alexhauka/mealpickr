import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
  height: 50%;
  margin: 5%;
  border: 0px solid white;
  border-radius: 25px;
`;

export const Image = styled.img`
  border-radius: 25px;
  margin-top: 10%;

`;

export const Description = styled.div`
  width: 90%;
  min-height: 15%;
  max-height: 15%;
  margin: 5%;
  text-align: center;
`;

export const MealButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MealButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 3em;
  margin: 5%;
  margin-bottom: 0;
  padding: 1%;
  background-color: white;
  color: black;
  border: 0px solid white;
  border-radius: 25px;
  cursor: pointer;
`;
