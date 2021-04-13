import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Picker from './components/Picker';
 
const App: React.FC<{}> = props => (
  <>
    <GlobalStyle />
    <Navbar />
    <Picker />
  </>
);
 
export default App;