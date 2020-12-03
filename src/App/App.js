import React from 'react';
import {Route, Switch, Redirect,BrowserRouter} from "react-router-dom";
import Auth from '../layouts/Auth';
import Home from '../layouts/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route exact path="/" render={props => <Home {...props}/>} />
        <Redirect from="/"  to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;