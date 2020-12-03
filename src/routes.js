import {Signup,Signin,PasswordRecovery} from './pages/Auth/index';

import{Home} from './pages/Home/index';

const Routers = [
    // ======================= AUTH LAYOUT ====================== //
    {
        path: "/auth/login",
        name: "Signin",
        component: Signin,
        require : false,
    },
    {
        path: "/auth/register",
        name: "Signup",
        component: Signup,
        require : false,
    },
    {
        path: "/auth/password/recovery",
        name: "Password Recovery",
        component: PasswordRecovery,
        require : false,
    },
    {
        path: "/home",
        name: "Chat Room",
        component: Home,
        layout: "",
        require : true,
    },
  
  

    
]
export default Routers;