import styled from 'styled-components';
import { media } from '../../styles/media';


export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 70%;
  max-height: 70%;
  margin: 0% 5% 0% 5%;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: #f1f1f12b;

  ${media.greaterThan('small')`
    margin: 5% 10% 0 10%;    
  `};

  ${media.greaterThan('large')`
    margin: 0% 0% 0% 20%;
    min-height: 80%;
    max-height: 80%; 
    min-width: 60%;
    max-width: 60%;
  `};

  
`;

export const ParagraphDescription = styled.p`
  text-align: center;
  line-height: 1.5em;
  padding: 5%;

  ${media.greaterThan('small')`
    font-size: 1.5em;
  `};

  ${media.greaterThan('medium')`
    font-size: 2em;  
  `};

  ${media.greaterThan('large')`
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
  max-width: 100%;
  min-height: 12rem;
  max-height: 12rem;
  margin-top: 3%;
  margin-bottom: 10%;
  border: 0px solid white;
  border-radius: 25px;

  ${media.greaterThan('small')`
    min-height: 15rem;
    max-height: 15rem;
  `};

  ${media.greaterThan('medium')`
    min-height: 30em;
    max-height: 30em;
  `};

  ${media.greaterThan('large')`
    min-width: 100%;
    min-height: 20em;
    margin-top: 0;
  `};
  
`;

export const ChildDescription = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 90%;
  margin-bottom: 5%;

  ${media.greaterThan('small')`
    font-size: 2em;
  `};

  ${media.greaterThan('medium')`
    font-size: 3em;
  `};

  ${media.greaterThan('large')`
    margin-top: 2%;
    margin-bottom: 5%;
    font-size: 2.3em;
  `};
`;

