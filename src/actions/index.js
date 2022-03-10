import streams from '../streams'

//simple javascript functions which are creating actions objects//
export const actionSignIn =(userId)=>{
return {type:'SIGN_IN',
        payload:userId}
}
export const actionSignOut =()=>{
return {type:'SIGN_OUT',
    }
}
export const apiRequest =(formValues)=>{
    return async (dispatch)=>{
        streams.post('/streams' ,formValues);
    }
}
