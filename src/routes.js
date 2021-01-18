import {Signup,Signin,PasswordRecovery,ConfirmToken,NewPassword} from './pages/Auth/index';
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
        path:"/auth/token/:key",
        name: "Confirm token",
        component :ConfirmToken,
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
        path:"/auth/password/new",
        name:"New Password",
        component: NewPassword,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        layout: "",
        require : true,
    },
    {
        path: "/home/:id",
        name: "Home",
        component: Home,
        layout: "",
        require : true,
    },
]
export default Routers;