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
  column-gap: 2em;
  }

  ul {
    margin-top: 0;
    list-style-type: none;
  }

  .intolerances-list {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15%;
  }

  .diets-list {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15%;
  }

  .cuisine-list {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10%;
  }

  .larger {
    height: 20px;
    width: 20px;
  }

  .top-icon-button {
    border: 1px solid white;
    padding: 5% 10%;
    cursor: pointer;
    float: left;
  }

  .top-icon-button:first-child {
    border-radius: 25% 0 0 25%;
  }

  .top-icon-button:last-child {
    border-radius: 0 25% 25% 0;
  }

  .top-icon-button:not(:last-child) {
    border-right: none;
  }
`;