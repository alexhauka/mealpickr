import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/background.jpg';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: monospace;
    color: white;
  }
 
  #root {
    margin: 0 auto;
  }
 
  html {
    background: url(${BackgroundImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    
  }

  a {
    text-decoration: none;
    color: white;
  }

  .columns {
  column-count: 2;
  column-gap: 3em;
  }

  ul {
    margin-top: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15%;
  }

  .larger {
    height: 20px;
    width: 20px;
  }
`;