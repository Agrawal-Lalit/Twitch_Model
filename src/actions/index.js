//simple javascript functions which are creating actions objects//
export const actionSignIn =(userId)=>{
return {type:'SIGN_IN',
        payload:userId}
}
export const actionSignOut =()=>{
return {type:'SIGN_OUT',
    }
}
