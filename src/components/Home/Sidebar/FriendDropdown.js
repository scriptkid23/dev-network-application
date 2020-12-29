import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import {ThreeDot} from '../../../assets/index'
import {CustomToggle, CustomMenu} from '../../common/index'

const FriendsDropdown = ({user}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleNewChat = () => {
        console.log(user)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <Dropdown.Toggle tag="span" as={CustomToggle}>
                <ThreeDot/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleNewChat}>New chat</Dropdown.Item>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item divider/>
                <Dropdown.Item>Block</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default FriendsDropdown
