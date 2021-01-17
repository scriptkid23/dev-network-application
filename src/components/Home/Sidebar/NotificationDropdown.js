import React from 'react'
import {ThreeDot} from '../../../assets/index'
import {CustomToggle, CustomMenu} from '../../common/index'
import {Dropdown} from 'react-bootstrap'

export default function NotificationDropdown({data}) {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleNewChat = () => {
        console.log(data)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <Dropdown.Toggle tag="span" as={CustomToggle}>
                <ThreeDot/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleNewChat}>Accept</Dropdown.Item>
                <Dropdown.Item>Denial</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
