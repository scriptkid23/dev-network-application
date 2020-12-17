import {Alert} from 'react-bootstrap'

import React from 'react'

export function ShowAlert({show,variant,notification}) {
    return (
        show && <Alert variant={variant}>
           {notification}
        </Alert>
    )
}
