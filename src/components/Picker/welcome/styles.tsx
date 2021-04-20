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
`;