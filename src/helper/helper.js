import {Route} from 'react-router-dom'
import Axios from 'axios'
import {ENVIRONMENTS} from '../constants/paths'
import Moment from 'moment'
//setup evironments
const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 
                ENVIRONMENTS.DEVELOPMENT : 
                ENVIRONMENTS.PRODUCTION; 

function get(path,params , token = null){
    if(token !== null) {
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
    else{
        return Axios({
            baseURL: baseUrl,
            method: "GET",
            url:path,
            params:params
        }).then(result => {return result})
        .catch(error => {return error.response})
    }
   
}
function post(path,body,token = null){
    if(token !== null){
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
    else{
        return Axios({
            baseURL:baseUrl,
            method:"POST",
            url:path,
            data: body
        }).then(result => {return result})
        .catch(error => {return error.response})
    }
   
}
function put_(path,body,token){
   if(token){
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
   else{
    return Axios({
        baseURL:baseUrl,
        method:"PUT",
        url:path,
        data: body
    }).then(result => {return result})
    .catch(error => {return error.response})
   }
}
function del(path,token){
   if(token){
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
   else{
    return Axios({
        baseURL:baseUrl,
        method:"DELETE",
        url:path,
    }).then(result => {return result})
    .catch(error => {return error.response})
   }

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

function convertTime(time){
    return Moment(time).fromNow()
}
export {getRoutes,get,post,put_,del,convertTime}