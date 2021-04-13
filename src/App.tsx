import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import routes from './config/routes';
import Picker from './components/Picker';
import About from './components/About';
import Contact from './components/Contact';
 
const App: React.FC<{}> = props => {
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
      </Switch>
    </BrowserRouter>
  )
};
 
export default App;