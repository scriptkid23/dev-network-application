export const PATH = {
    SIGNIN : "/signin",
    SIGNUP : "/signup",
    PASSWORD_RECOVERY : "/password/recovery",
}
export const ENVIRONMENTS = {
    DEVELOPMENT : "http://localhost:8000",
    PRODUCTION : "https://capricorn-chat-serv.herokuapp.com",
}
export const API = {
    SIGNIN: "/api/v1/auth/signin",
    SIGNUP: "/api/v1/auth/signup",
    GET_TOKEN_MESSAGE : "/api/v1/auth/token/message",
    LOGOUT: "/api/v1/auth/revoke/token",
    ME: "/api/v1/auth/me",
    CONFIRM_TOKEN:"api/v1/auth/token/confirm",
    FORGOT_PASSWORD: "/api/v1/auth/recovery/password",
    TOKEN_MESSAGE: "/api/v1/auth/token/message",
    UPDATE_PROFILE: "/api/v1/user/update",
    
    GET_LIST_FRIEND: "/api/v1/user/list/friend",
    GET_MESSAGE_LOG: "/api/v1/user/conversation",
    // GET_LIST_MESSAGE_LOG:"/api/v1/user/message/log",
    GET_LIST_MESSAGE_LOG:"/api/v1/user/message/group/log",
    SEND_MESSAGE: "/api/v1/user/send/message",
    GET_LIST_NOTIFICATION: "/api/v1/user/notifications",
    ACCEPT_FRIEND:"/api/v1/user/accept/friend",
    CREATE_CONVERSATION:"/api/v1/user/create/conversation",
    RESET_PASSWORD:"/api/v1/auth/reset/password",
    GET_PROFILE: "/api/v1/user/profile"
}
export const COMPONENT = {
    CHATS : "chats",
    FRIENDS: "friends",
    NOTIFICATIONS: "notifications",
}