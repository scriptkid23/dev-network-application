import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import Spirity from '../../../helper/hook'
import { useForm } from "react-hook-form";

export default function AddFriend() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { store, action } = Spirity();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
       
    };

    return (
        <div>
            <div className="sidebar-group">
                <div className={`sidebar ${homeStore.profile_visibly && 'active'}`}>
                    <div className="modal-content" show={show} onHide={handleClose}>
                        <div className="modal-header" closeButton>
                            <h5 className="modal-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg> Edit Profile</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="active nav-link">Personal</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Social Links</a>
                                </li>
                            </ul>
                            <form className="">
                                <div className="tab-content">
                                    <div className="tab-pane active">
                                    </div>
                                    <div className="form-group">
                                        <label for="fullname" className="">Fullname</label>
                                        <div className="input-group">
                                            <input name="fullname" id="fullname" type="text" className="form-control" ref={register({ required: true })}>
                                                <div className="input-group-append">
                                                    <button className="btn btn-light">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </input>
                                        </div>
                                        <div className="form-group">
                                            <label for="avatar" className="">Avatar</label>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <figure className="avatar mr-3 item-rtl">
                                                        <img src="data:image/jpeg;base64,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" class="rounded-circle" alt="avatar" />
                                                    </figure>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" id="exampleCustomFileBrowser" name="customFile" className="custom-file-input" ref={register({ required: true })}/>
                                                    <label className="custom-file-label" for="exampleCustomFileBrowser">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="city" className="">City</label>
                                            <div className="input-group">
                                                <input name="city" id="city" placeholder="Ex: Columbia" type="text" className="form-control" ref={register({ required: true })} />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <circle cx="12" cy="12" r="6"></circle>
                                                            <circle cx="12" cy="12" r="2"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="phone" className="">Phone</label>
                                            <div className="input-group">
                                                <input name="phone" id="phone" placeholder="(555) 555 55 55" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <button className="btn btn-light">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="phone" className="">Website</label>
                                            <div className="input-group">
                                                <input name="website" id="website" placeholder="https://" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <button className="btn btn-light">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane">
                                        <div className="form-group">
                                            <label for="about" className="">Write a few words that describe you</label>
                                            <textarea name="about" id="about" className="form-control" ref={register({ required: true })}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-checkbox custom-control">
                                                <input type="checkbox" id="customCheckbox1" className="custom-control-input" checked="" ref={register({ required: true })}/>
                                                <label className="custom-control-label" for="customCheckbox1">View profile</label>                                                                                                                                     </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="facebook" id="facebook" placeholder="Username" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <span className="bg-facebook input-group-text">
                                                        <i className="fa fa-facebook"></i>
                                                    </span>
                                                </div>                                                                                                                                                      </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="twitter" id="twitter" placeholder="Username" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <span className="bg-twitter input-group-text">
                                                        <i className="fa fa-twitter"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="instagram" id="instagram" placeholder="Username" type="text" className="form-control" ref={register({ required: true })}/>
                                                <div className="input-group-append">
                                                    <span className="bg-instagram input-group-text">
                                                        <i className="fa fa-instagram"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="linkedin" id="linkedin" placeholder="Username" type="text" className="form-control" ref={register({ required: true })}/>
                                                <div className="input-group-append">
                                                    <span className="bg-linkedin input-group-text">
                                                        <i className="fa fa-linkedin"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="dribbble" id="dribbble" placeholder="Username" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <span className="bg-dribbble input-group-text">
                                                        <i className="fa fa-dribbble"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="youtube" id="youtube" placeholder="Username" type="text" className="form-control" ref={register({ required: true })}/>
                                                <div className="input-group-append">
                                                    <span className="bg-youtube input-group-text">
                                                        <i className="fa fa-youtube"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="google" id="google" placeholder="Username" type="text" className="form-control" ref={register({ required: true })} />
                                                <div className="input-group-append">
                                                    <span className="bg-google input-group-text">
                                                        <i className="fa fa-google"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="whatsapp" id="whatsapp" placeholder="Username" type="text" className="form-control" ref={register({ required: true })}/>
                                                <div className="input-group-append">
                                                    <span className="bg-whatsapp input-group-text">
                                                        <i className="fa fa-whatsapp"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary"
                             type="submit"
                            onClick={handleSubmit(onSubmit)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}