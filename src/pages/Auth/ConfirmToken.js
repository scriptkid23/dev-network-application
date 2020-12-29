import React from 'react'
import {useParams} from 'react-router-dom'
import {Backdrop} from '../../components/common/index'
import Spirity from '../../helper/hook'
export function ConfirmToken() {
    const {_,action} = Spirity();

    const params = useParams();
    React.useEffect(() => {
        let isSubcribe = true;
        if(isSubcribe){
            action.confirmToken(params)
        }
        return () => isSubcribe = false;
    }, [])
    return (
        <div>
           <Backdrop show={true}/>
        </div>
    )
}
