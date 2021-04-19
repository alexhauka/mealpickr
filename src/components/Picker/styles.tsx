import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  height: 35em;
  margin: 7%;
  margin-top: 10%;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: #f1f1f12b;
`;

export const Preview = styled.img`
  width: 90%;
  height: 50%;
  margin: 5%;
  border: 0px solid white;
  border-radius: 25px;
`;

export const Description = styled.div`
  width: 90%;
  margin-bottom: 5%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 90%;
  margin: 5%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  padding-bottom: 10%;
`;

