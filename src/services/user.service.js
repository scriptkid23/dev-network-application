import { API } from "../constants/paths";
import { get } from "../helper/helper";

class UserService{
   
    getListFriend(token){
        return get(API.GET_LIST_FRIEND,null,token);
    }

}
export default new UserService();