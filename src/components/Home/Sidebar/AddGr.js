import React from "react";
import { AddGroup } from "../../../assets/index";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Spirity from "../../../helper/hook";

export default function AddGr() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const { store, action } = Spirity();
 
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    action.createConversation(data.list);
  };
  return (
    <div>
      <button className="btn btn-outline-light" onClick={handleShow}>
        <AddGroup />
      </button>
      <Modal centered show={show} onHide={handleClose}>
        <div class="modal-content">
          <Modal.Header closeButton>
            <h5 class="modal-title">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>{" "}
              Add Group
            </h5>
          </Modal.Header>
          <div class="modal-body">
            <form class="">
              <div class="form-group">
                <div class="form-group">
                  <p>The group members</p>
                  <input
                    name="list"
                    id="group_name"
                    type="text"
                    placeholder="abc@gmail.com, demo@gmail.com"
                    ref={register({ required: true })}
                    class="form-control"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              onClick={handleSubmit(onSubmit)}
              className="btn btn-primary"
              type="submit"
            >
              Add{" "}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
