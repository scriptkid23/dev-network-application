import React from 'react'
import {useParams} from 'react-router-dom'
import {Backdrop} from '../../components/common/index'
import Spirity from '../../helper/hook'
export function ConfirmToken() {
    const {_,action} = Spirity();

    const params = useParams();
    React.useEffect(() => {
        action.confirmToken(params)
        
    }, [params])
    return (
        <div>
           <Backdrop show={true}/>
        </div>
    )
}
