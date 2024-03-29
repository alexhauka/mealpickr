import styled from 'styled-components';
import { media } from '../../styles/media';
 
export const Container = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin-top: 1%;
  color: #F1F1F1;
`;
export const Logo = styled.div`
  margin-left: 3%;
  font-size: 1.3em;

  ${media.greaterThan('small')`
    font-size: 3em;
  `};
`;
 
export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;
 
export const MenuItem = styled.div`
  margin-right: 20%;
  font-size: 1em;

  ${media.greaterThan('small')`
    font-size: 2em;
  `};
`;