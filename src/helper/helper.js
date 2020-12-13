import {Route} from 'react-router-dom'
import Axios from 'axios'
import {ENVIRONMENTS} from '../constants/paths'
//setup evironments
const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 
                ENVIRONMENTS.DEVELOPMENT : 
                ENVIRONMENTS.PRODUCTION; 

function get(path,params , token = null){
    return Axios({
        baseURL: baseUrl,
        method: "GET",
        url:path,
        headers:{
            Authorization :"Bearer "+token,
        },
        params:params
    }).then(result => {return result})
    .catch(error => {return error.response})
}
function post(path,body,token = null){
    return Axios({
        baseURL:baseUrl,
        method:"POST",
        url:path,
        headers:{
            Authorization : "Bearer " + token
        },
        data: body
    }).then(result => {return result})
    .catch(error => {return error.response})
}
function put(path,body,token){
    return Axios({
        baseURL:baseUrl,
        method:"PUT",
        url:path,
        headers:{
            Authorization : "Bearer " + token
        },
        data: body
    }).then(result => {return result})
    .catch(error => {return error.response})
}
function del(path,token){
    return Axios({
        baseURL:baseUrl,
        method:"DELETE",
        url:path,
        headers:{
            Authorization : "Bearer " + token
        },
    }).then(result => {return result})
    .catch(error => {return error.response})

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


export {getRoutes,get,post,put,del}