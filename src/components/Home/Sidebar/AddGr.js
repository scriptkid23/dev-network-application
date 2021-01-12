import React from 'react'
import { AddGroup } from '../../../assets/index';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Spirity from '../../../helper/hook'

export default function AddGr() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {store,action} = Spirity();
    var authStore = store.authStore;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      action.AddGroup(data)
    };

    return (
        <div>
            <button className="btn btn-outline-light"
                onClick={handleShow}>
                <AddGroup />
            </button>
            <Modal centered show={show} onHide={handleClose}>
                <div class="modal-content">
                <Modal.Header closeButton>
                        <h5 class="modal-title"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg> Add Group
                        </h5>
                        {/* <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button> */}
                    </Modal.Header>
                   
                    <div class="modal-body">
                        <form class="">
                            <div class="form-group">
                                <label for="group_name" class="">Group name</label>
                                <div class="input-group">
                                    <input name="group_name" id="group_name" type="text"
                                        ref={register({ required: true })}
                                        class="form-control" />
                                    <div class="input-group-append">
                                        <button id="Tooltip-Smile" class="btn btn-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <p>The group members</p>
                                    <div class="avatar-group">
                                        <figure class="avatar" id="Tooltip-Avatar1">
                                            <span class="avatar-title bg-success rounded-circle">
                                                T</span>
                                        </figure>
                                        <figure class="avatar" id="Tooltip-Avatar2">
                                            <img src="data:image/jpeg;base64,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"
                                                class="rounded-circle" alt="avatar" />
                                        </figure>
                                        <figure class="avatar" id="Tooltip-Avatar3">
                                            <span class="avatar-title bg-warning rounded-circle">M</span>
                                        </figure>
                                        <figure class="avatar" id="Tooltip-Avatar4">
                                            <img src="data:image/jpeg;base64,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"
                                                class="rounded-circle" alt="avatar" />
                                        </figure>
                                        <figure class="avatar" id="Tooltip-Avatar5">
                                            <span class="avatar-title bg-info rounded-circle">B</span>
                                        </figure>
                                        <a href="#/" title="Add friends" id="Tooltip-Avatar6">
                                            <figure class="avatar">
                                                <span class="avatar-title bg-primary rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </span>
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="description" class="">Invitation message</label>
                                    <textarea name="description" id="description" class="form-control"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button onClick={handleSubmit(onSubmit)}
                        className="btn btn-primary" 
                        type="submit">Add </button>
                    </div>
                </div>

            </Modal>
        </div>
    )
}