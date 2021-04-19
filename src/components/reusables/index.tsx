import styled from 'styled-components';


export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75%;
  max-height: 75%;
  margin: 5%;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: #f1f1f12b;
`;

export const ParagraphDescription = styled.p`
  text-align: center;
  line-height: 1.5em;
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15em;
  border: 0px solid white;
  border-radius: 25px;
`;

export const ChildDescription = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 90%;
  margin-bottom: 10%;
`;

