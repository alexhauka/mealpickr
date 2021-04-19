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

  .columns-intolerances {
    column-count: 2;
    column-gap: 1em;
    column-width: 7em;
    margin-left: 1em;
  }

  .columns-diets {
    column-count: 2;
    column-gap: 1em;
    column-width: 7em;
    margin-left: 1em;
  }

  .columns-cuisines {
    column-count: 2;
    column-gap: 1em;
    column-width: 7em;
    margin-left: 1em;
  }

  // .columns {
  //   column-count: 2;
  //   column-gap: 1em;
  //   column-width: 7em;
  //   margin-left: 2em;
  //   }

  ul {
    margin-top: 0;
    list-style-type: none;
  }

  .intolerances-list {
    display: flex;
    align-items: flex-end;
    font-size: smaller;
    margin-bottom: 15%;
  }

  .diets-list {
    display: flex;
    align-items: flex-end;
    font-size: smaller;
    margin-bottom: 15%;
  }

  .cuisine-list {
    display: flex;
    align-items: flex-end;
    font-size: smaller;
    margin-bottom: 15%;
  }

  .larger {
    height: 18px;
    width: 18px;
  }

  .top-icon-button {
    border: 1px solid white;
    padding: 0.5%;
    float: left;
    width: 33.3%;
  }

  .top-icon-button-selected {
    border: 1px solid white;
    padding: 0.5%;
    float: left;
    width: 33.3%;
    background-color: #ffffff5c;
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

  .top-icon-button-selected:after {
    content: "";
    clear: both;
    display: table;
  }

  .top-icon-button-selected:hover {
    background-color: #ffffff57;
  }

  .top-icon-button-selected:first-child {
    border-radius: 10% 0 0 10%;
  }

  .top-icon-button-selected:last-child {
    border-radius: 0 10% 10% 0;
  }

  .top-icon-button-selected:not(:last-child) {
    border-right: none;
  }
`;