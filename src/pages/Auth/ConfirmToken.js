import React from 'react'
import {useParams,Redirect,useHistory} from 'react-router-dom'
import {Backdrop} from '../../components/common/index'
import {useSelector,useDispatch} from 'react-redux'
import * as authReducer from '../../redux/reducers/auth.reducer'
export function ConfirmToken() {
    const history = useHistory();
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions}
    const params = useParams();
    React.useEffect(() => {
        dispatch(authAction.confirm.requested({data:{token:params.key},callback:history}))
        
    }, [params.key])
    return (
        <div>
           <Backdrop show={true}/>
        </div>
    )
}
