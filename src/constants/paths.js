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
    LOGOUT: "/api/v1/auth/revoke/token",
    ME: "/api/v1/auth/me",
    CONFIRM_TOKEN:"api/v1/auth/token/confirm",
    FORGOT_PASSWORD: "/api/v1/auth/recovery/password",
    TOKEN_MESSAGE: "/api/v1/auth/token/message",
    UPDATE_PROFILE: "/api/v1/user/update"
}
export const COMPONENT = {
    CHATS : "chats",
    FRIENDS: "friends",
    NOTIFICATIONS: "notifications",
}