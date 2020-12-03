import React, { Component } from 'react'
import Routers from '../routes';
import {Route} from 'react-router-dom'
export default class Auth extends Component {
    getRoutes = routes => {
    
        return routes.map((prop, key) => {
          if (prop.layout === "/auth") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (
                  <prop.component
                    {...props}
                    
                  />
                )}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
    render() {
        return (
            <div>
                {this.getRoutes(Routers)}
            </div>
        )
    }
}