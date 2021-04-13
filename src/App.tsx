import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Picker from './components/Picker';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Promise from './components/Promise';
 
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Picker />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Promise />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};
 
export default App;