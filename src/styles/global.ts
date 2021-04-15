import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
  column-gap: 0.5em;
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
    padding: 0.5%;
    cursor: pointer;
    float: left;
    width: 33.3%;
  }

  .top-icon-button:after {
    content: "";
    clear: both;
    display: table;
  }

  .top-icon-button:hover {
    background-color: #ffffff57;
  }

  .top-icon-button:first-child {
    border-radius: 10% 0 0 10%;
  }

  .top-icon-button:last-child {
    border-radius: 0 10% 10% 0;
  }

  .top-icon-button:not(:last-child) {
    border-right: none;
  }
`;