import styled from 'styled-components';
import { media } from '../../styles/media';


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

  ${media.greaterThan('small')`
    margin: 5% 10% 0 10%;    
  `};

  ${media.greaterThan('medium')`
    margin: 5% 10% 0 10%;    
  `};
`;

export const ParagraphDescription = styled.p`
  text-align: center;
  line-height: 1.5em;
  padding: 5%;

  ${media.greaterThan('small')`
    font-size: 1.5em;
  `};
`;

export const MiscContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5%;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: #f1f1f12b;

  ${media.greaterThan('small')`
    margin: 5% 10% 0 10%;    
  `};
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 18em;
  margin-top: 10%;
  border: 0px solid white;
  border-radius: 25px;

  ${media.greaterThan('small')`
    min-height: 25em;
  `};
`;

export const ChildDescription = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 90%;
  margin-bottom: 10%;

  ${media.greaterThan('small')`
    font-size: 2em;
  `};
`;

