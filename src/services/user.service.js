import { API } from "../constants/paths";
import { get } from "../helper/helper";

class UserService{
   
    getListFriend(token){
        return get(API.GET_LIST_FRIEND,null,token);
    }
    getMessageLog(channelId,token){
        return get(API.GET_MESSAGE_LOG,{channelId:channelId},token);
    }

}
export default new UserService();