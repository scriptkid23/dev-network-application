import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import {ThreeDot} from '../../../assets/index'
import Spirity from '../../../helper/hook';
import {CustomToggle, CustomMenu} from '../../common/index'
import {useDispatch} from 'react-redux'
import * as homeReducer from '../../../redux/reducers/home.reducer';
const FriendsDropdown = ({user}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { store, action } = Spirity();
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleNewChat = () => {
        console.log(user.email)
        action.createConversation(user.email);
    }
    const handleProfile = () => {
        console.log(user);
        action.getProfile(user.id);
    }
    const dispatch = useDispatch();
    const homeAction = {...homeReducer.actions.chat}
   const profileActions = () => {
    dispatch(homeAction.viewProfile())
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <Dropdown.Toggle tag="span" as={CustomToggle}>
                <ThreeDot/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleNewChat}>New chat</Dropdown.Item>
                {/*<Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>*/}
                <Dropdown.Item onClick={profileActions}>Profile</Dropdown.Item>
                <Dropdown.Item divider/>
                <Dropdown.Item>Block</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default FriendsDropdown
