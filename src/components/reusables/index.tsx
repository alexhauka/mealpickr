import styled from 'styled-components';


export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 5%;
`;

export const MiscContainer = styled.div`
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

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 15em;
  max-height: 15em;
  margin-top: 5%;
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

