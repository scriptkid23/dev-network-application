import {Route} from 'react-router-dom'
import Axios from 'axios'
import {EVIRONMENTS} from '../constants/paths'
//setup evironments
const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? EVIRONMENTS.develop : EVIRONMENTS.production; 

function get(path,params){
    return Axios({
        baseURL: baseUrl,
        
        

    })
}
function post(path,body){

}
function put(path,body){

}
function del(path){

}
function getRoutes(route){
    return(
        route.map((prop,key) => {
            return(<Route
                exact
                path = {prop.path}
                component={props => (<prop.component {...props} />)}
                key = {key}
            />)
        })
    )
}


export {getRoutes}