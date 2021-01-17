import React from 'react'
import {ThreeDot} from '../../../assets/index'
import {CustomToggle, CustomMenu} from '../../common/index'
import {Dropdown} from 'react-bootstrap'
import Spirity from '../../../helper/hook';

export default function NotificationDropdown({data}) {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const { store, action } = Spirity();
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleAccept = () => {
        action.acceptFriend(data)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <Dropdown.Toggle tag="span" as={CustomToggle}>
                <ThreeDot/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleAccept}>Accept</Dropdown.Item>
                <Dropdown.Item>Denial</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
