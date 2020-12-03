import React from 'react';
import {Route, Switch, Redirect,HashRouter} from "react-router-dom";
import AuthenticatedGuard from '../guards/AuthenticatedGuard';
import Auth from '../layouts/Auth';
import Home from '../layouts/Home';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={["/auth/:name","/auth/:name/:name_"]} component={Auth}/>
        <AuthenticatedGuard  
          exact  
          path={["/home","/home/:name"]} 
          component={Home} />
        <Redirect from="/"  to="/home" />
      </Switch>
    </HashRouter>
  );
}

export default App;