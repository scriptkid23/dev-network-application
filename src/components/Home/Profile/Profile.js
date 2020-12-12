import React from 'react'
import {Close} from '../../../assets/index'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useSelector,useDispatch} from 'react-redux'
import * as homeReducer from '../../../redux/reducers/home.reducer';
export default function Profile() {
    const dispatch = useDispatch();
    const homeAction = {...homeReducer.actions.chat}
    const homeStore  = useSelector(state => state.home) 

    const closeProfile = () => {
        dispatch(homeAction.closeProfile())
    }

    return (
        <div className="sidebar-group">
            <div className={`sidebar ${homeStore.profile_visibly && 'active'}`}>
                <header>
                    <span>Profile</span>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a 
                            onClick={() => closeProfile()}
                            className="btn btn-outline-light text-danger sidebar-close">
                                <Close/>
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="sidebar-body">
                    <PerfectScrollbar>
                        <div className="pl-4 pr-4">
                            <div className="text-center">
                                <figure className="avatar avatar-xl mb-3">
                                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/003-eye%20mask.svg" className="rounded-circle" alt="avatar"/>
                                </figure>
                                <h5 class="mb-1">Mirabelle Tow</h5>
                                <div className="justify-content-center mt-5">
                                        <span style={{fontSize:"16px"}} className="text-primary">About</span>
                                </div>
                            </div>  
                            <div className="tab-content">
                                <div className="tab-pane active">
                                <p className="text-muted" style={{fontSize:"14px"}}>
                               
                                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
                                </p>
                                <div class="mt-4 mb-4"><h6>Phone</h6><p class="text-muted">(555) 555 55 55</p></div>
                                <div class="mt-4 mb-4"><h6>City</h6><p class="text-muted">Germany / Berlin</p></div>
                                <div class="mt-4 mb-4"><h6>Website</h6><p><a href="foo">www.franshanscombe.com</a></p></div>
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
    )
}
