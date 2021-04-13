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
    -moz-column-count: 4;
  -moz-column-gap: 1em;
  -webkit-column-count: 4;
  -webkit-column-gap: 1em;
  column-count: 4;
  column-gap: 1em;
  }

  ul {
    margin-top: 0;
    list-style-type: none;
    font-size: xx-small;
  }
`;