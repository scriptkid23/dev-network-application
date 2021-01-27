import React, { useState } from "react";
import { Logo, Chats, Friends, Alert } from "../../assets/index";
import { Dropdown, Button, Modal, Form } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { COMPONENT } from "../../constants/paths";
import Spirity from "../../helper/hook";
import { Link } from "react-router-dom";
import EditProfile from "./Profile/EditProfile";
const CustomizeOverlayTrigger = (props) => {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip>{props.title}</Tooltip>}
    >
      {props.children}
    </OverlayTrigger>
  );
};
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));
function ModalEditProfile({ open, handleClose ,handleEditProfile}) {
  function reducers(state,action){
    switch (action.type) {
      case 'SET_VALUE':
        return ({
            ...state,
            [action.payload.name] : action.payload.value,
        })
      default:
        break;
    }
  }
 
  const [state,dispatch] = React.useReducer(reducers,{})
  const handleChange = ( e) => { 
    dispatch({type:"SET_VALUE",payload:{name:e.target.name,value:e.target.value}})
  }
  const handleSubmit = () => {
    handleEditProfile(state)
    handleClose(false);
  }
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5 className="modal-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>{" "}
            Edit Profile
          </h5>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <label className="">First Name</label>
              <div className="input-group">
                <input
                  onChange={e => handleChange(e)}
                  name="first_name"
                  placeholder="First Name"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append"></div>
              </div>
            </div>
            <div className="form-group">
              <label className="">Last Name</label>
              <div className="input-group">
                <input
                onChange={e => handleChange(e)}
                  name="last_name"
                  placeholder="Last Name"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append"></div>
              </div>
            </div>
            <div className="form-group">
              <label className="">Avatar</label>
              <div className="input-group">
                <input
                onChange={e => handleChange(e)}
                  name="avatar"
                  placeholder="Avatar"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append"></div>
              </div>
            </div>
            <div className="form-group">
              <label className="">Phone</label>
              <div className="input-group">
                <input
                onChange={e => handleChange(e)}
                  name="phone_number"
                  placeholder="(+84) 975 164 538"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button className="btn btn-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="">Bio</label>
              <div className="input-group">
                <textarea
                  style={{
                    resize: "none",
                  }}
                  onChange={e => handleChange(e)}
                  name="bio"
                  placeholder="Bio"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append"></div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function Navigation({ screen, setScreen }) {
  const { store, action } = Spirity();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const setComponent = (comp) => {
    setScreen(comp);
  };
  const showProfile = () => {
    action.getProfile(store.messageStore.user_detail.id);
    action.viewProfile();
  }
  console.log(open);

  return (
    <nav className="navigation">
      <ModalEditProfile open={open} handleClose={handleClose}
        handleEditProfile = {action.editProfile}
      />
      <div className="nav-group">
        <ul>
          <li className="logo">
            <a href="/#">
              <Logo />
            </a>
          </li>
          <li>
            <CustomizeOverlayTrigger title={"Chats"}>
              <a
                className={`sidebar 
                            ${screen === COMPONENT.CHATS ? "active" : null} 
                            cursor-pointer`}
                onClick={() => setComponent(COMPONENT.CHATS)}
              >
                <span className="badge badge-warning">&nbsp;</span>
                <Chats />
              </a>
            </CustomizeOverlayTrigger>
          </li>
          <li>
            <CustomizeOverlayTrigger title={"Friends"}>
              <a
                className={`sidebar 
                            ${screen === COMPONENT.FRIENDS ? "active" : null} 
                            cursor-pointer`}
                onClick={() => setComponent(COMPONENT.FRIENDS)}
              >
                <span className="badge badge-warning">&nbsp;</span>
                <Friends />
              </a>
            </CustomizeOverlayTrigger>
          </li>
          <li>
            <CustomizeOverlayTrigger title={"Notifications"}>
              <a
                className={`sidebar 
                            ${
                              screen === COMPONENT.NOTIFICATIONS
                                ? "active"
                                : null
                            } 
                            cursor-pointer`}
                onClick={() => setComponent(COMPONENT.NOTIFICATIONS)}
              >
                <span className="badge badge-success">&nbsp;</span>
                <Alert />
              </a>
            </CustomizeOverlayTrigger>
          </li>
          <li className="scissors text-center" id="user-menu">
            <Dropdown drop="up">
              <Dropdown.Toggle as={CustomToggle}>
                <figure className="avatar">
                  <img
                    src="http://storage-3t.herokuapp.com/uploads/avatar/002-unicorn.svg"
                    alt="avt-user"
                    className="rounded-circle"
                  />
                </figure>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1" onClick={() => setOpen(true)}>
                  Edit Profile
                </Dropdown.Item>
                <Dropdown.Item eventKey="1" onClick={showProfile}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">Setting</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3" onClick={() => action.logout()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}
