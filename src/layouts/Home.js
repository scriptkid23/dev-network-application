import React, { Component } from 'react'
import Routers from '../routes';
import {Row,Container,Col} from 'react-bootstrap'
import {Route,Redirect,Link} from 'react-router-dom'
import CookieService from '../services/cookie.service'

export default class Home extends Component {
  
    getRoutes = routes => {
    
        return routes.map((prop, key) => {
          if (prop.layout === "/") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (
                    CookieService.get('token') ?
                  <prop.component
                    {...props}
                    
                  />:<Redirect to='/auth/signin'/>
                )}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      }
    render() {
        return (
            <div className="d-block bg-light">
              
                    {this.getRoutes(Routers)}
               
            </div>
        )
    }
}