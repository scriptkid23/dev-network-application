import {Signup,Signin,PasswordRecovery} from './pages/Auth/index';

import Home from './pages/Home/Home';
const Routers = [
    // ======================= AUTH LAYOUT ====================== //
    {
        path: "/signin",
        name: "Signin",
        component: Signin,
        layout: "/auth",
        require : false,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
        layout: "/auth",
        require : false,
    },
    {
        path: "/password-recovery",
        name: "Password Recovery",
        component: PasswordRecovery,
        layout: "/auth",
        require : false,
    },
    {
        path: "/",
        name: "Chat Room",
        component: Home,
        layout: "/",
        require : true,
    },
  
  

    
]
export default Routers;