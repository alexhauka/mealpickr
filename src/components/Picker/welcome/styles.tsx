import styled from 'styled-components';
import { ParagraphDescription } from '../../reusables';
import { media } from '../../../styles/media';

export const WelcomeDescription = styled(ParagraphDescription)`
  width: 100%;
  margin-top: 10%;

  ${media.greaterThan('small')`
    font-size: 1.5em;   
  `};

  ${media.greaterThan('medium')`
    font-size: 2em;   
  `};

  ${media.greaterThan('large')`
    display: none;
  `};
`;


export const LargeWelcomeDescription = styled(ParagraphDescription)`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    min-width: 100%;
    margin-top: 5%;
    font-size: 1.5em; 
  `};
`;