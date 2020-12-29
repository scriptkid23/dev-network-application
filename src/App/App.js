import React from 'react';
import {Route, Switch, Redirect,BrowserRouter} from "react-router-dom";
import AuthenticatedGuard from '../guards/AuthenticatedGuard';
import Auth from '../layouts/Auth';
import Home from '../layouts/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/auth/:name","/auth/:uri1/:uri2"]} component={Auth}/>
        <AuthenticatedGuard  
          path={["/home","/home/:name"]} 
          component={Home} />
        <Redirect from="/"  to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
