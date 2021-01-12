import { API } from "../constants/paths";
import { get,post } from "../helper/helper";

class UserService{
   
    getListFriend(token){
        return get(API.GET_LIST_FRIEND,null,token);
    }
    getMessageLog(channelId,token){
        return get(API.GET_MESSAGE_LOG,{channelId:channelId},token);
    }
    sendMessage(channelId,message,message_type,token){
        return post(API.SEND_MESSAGE,{
            channelId:channelId,
            message:message,
            message_type:message_type
        },token)
    }

}
export default new UserService();