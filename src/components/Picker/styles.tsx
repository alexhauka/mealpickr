import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  min-height: 80%;
  margin: 10%;
  margin-top: 10%;
  border: 2px solid white;
  border-radius: 20px;
  background-color: #f1f1f12b;
`;

export const Preview = styled.img`
  opacity: 1;
  width: 80%;
  height: 50%;
  margin: 10%;
  border: 2px solid white;
  border-radius: 15px;
`;

export const Options = styled.div`
  min-height: 50%;
  min-width: 90%;
  border: 2px solid red;
`;
