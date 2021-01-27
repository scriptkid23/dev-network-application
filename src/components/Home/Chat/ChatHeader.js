import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { CustomToggle } from "../../common/CustomToggle";
import { ThreeDot } from "../../../assets/index";

import { useDispatch } from "react-redux";
import * as homeReducer from "../../../redux/reducers/home.reducer";
import { convertTime } from "../../../helper/helper";

export function ChatHeader({ info, ownerId, header_info }) {
  const dispatch = useDispatch();
  const homeAction = { ...homeReducer.actions.chat };

 
  const exportTitle = (data) => {
    if (data.member.length > 2) {
      return data.title;
    } else {
      let result = data.member.filter((value) => value.id !== ownerId);
      return result[0].first_name + " " + result[0].last_name;
    }
  };
  console.log(info);

  return (
    <div class="chat-header">
      <div class="chat-header-user">
        <figure class="avatar avatar-state-success">
          <img src={info ? info.avatar : header_info.avatar} alt="avt-room" />
        </figure>
        <div>
          <h5>
            {info
              ? exportTitle(info)
              : header_info.first_name + " " + header_info.last_name}
          </h5>
          <small class="text-muted">
            <i>{info && convertTime(info.created_at)}</i>
          </small>
        </div>
      </div>
      
    </div>
  );
}
