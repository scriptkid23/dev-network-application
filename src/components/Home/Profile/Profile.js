import React from "react";
import { Close } from "../../../assets/index";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector, useDispatch } from "react-redux";
import * as homeReducer from "../../../redux/reducers/home.reducer";
import Spirity from "../../../helper/hook";
export default function Profile() {
  const dispatch = useDispatch();
  const homeAction = { ...homeReducer.actions.chat };
  const homeStore = useSelector((state) => state.home);
  const { store, action } = Spirity();
  const closeProfile = () => {
    dispatch(homeAction.closeProfile());
  };

  return (
    <div className="sidebar-group">
      <div className={`sidebar ${homeStore.profile_visibly && "active"}`}>
        <header>
          <span>Profile</span>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                onClick={() => closeProfile()}
                className="btn btn-outline-light text-danger sidebar-close"
              >
                <Close />
              </a>
            </li>
          </ul>
        </header>
        <div className="sidebar-body">
          <PerfectScrollbar>
            <div className="pl-4 pr-4">
              <div className="text-center">
                <figure className="avatar avatar-xl mb-3">
                  <img
                    src={store.messageStore.profile.avatar}
                    className="rounded-circle"
                    alt="avatar"
                  />
                </figure>
                <h5 class="mb-1">
                  {store.messageStore.profile.first_name +
                    " " +
                    store.messageStore.profile.last_name}
                </h5>
                <div className="justify-content-center mt-5">
                  <span style={{ fontSize: "16px" }} className="text-primary">
                    About
                  </span>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active">
                  <p className="text-muted" style={{ fontSize: "14px" }}>
                  {store.messageStore.profile.bio}
                  </p>
                  <div class="mt-4 mb-4">
                    <h6>Phone</h6>
                    <p class="text-muted">{store.messageStore.profile.phone_number}</p>
                  </div>
                  <div class="mt-4 mb-4">
                    <h6>City</h6>
                    <p class="text-muted">Ha Noi</p>
                  </div>
                  <div class="mt-4 mb-4">
                    <h6>Email</h6>
                    <p>
                      <a href="foo">{store.messageStore.profile.email}</a>
                    </p>
                  </div>
                  <div class="mt-4 mb-4">
                    <h6 class="mb-3">Social media accounts</h6>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
}
