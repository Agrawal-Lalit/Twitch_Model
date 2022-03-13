import streams from '../streams'
import history from '../history';

//simple javascript functions which are creating actions objects//
export const actionSignIn =(userId)=>{
return {type:'SIGN_IN',
        payload:userId}
}
export const actionSignOut =()=>{
return {type:'SIGN_OUT',
    }
}

//formValues is an object 
// /streams contains database which is storing formValues as [formvalues.id]: formValues key:values pairs
//in streams={}
export const streamCreate =(formValues)=>{
    return async (dispatch)=>{
        const response = await streams.post('/streams' ,formValues);
        dispatch({type:'STREAM_CREATE',payload: response.data})      //--->response is just the object

        //for programatically navigating to page where streams are displayed 
        //we are using history obj of BrowserRouter .
        history.push('/');
    }
}

export const streamsFetch =()=> async dispatch =>{
    const res=await streams.get('/streams');
    dispatch({type:'STREAMS_FETCH',payload: res.data})   //-->res is all streams object array
}
export const streamFetch =(id)=> async dispatch =>{
    const res=await streams.get(`/streams/${id}`);
    dispatch({type:'STREAM_FETCH',payload: res.data})  //-->res is just formValues
}
export const streamUpdate =(id ,formValues)=> async dispatch =>{
    const res=await streams.put(`/streams/${id}`,formValues);
    dispatch({type:'STREAM_UPDATE',payload: res.data})  //-->payload is just formValues
}
export const streamDelete =(id)=> async dispatch =>{
    const res=await streams.delete(`/streams/${id}`);
    dispatch({type:'STREAM_DELETE',payload: id})   //-->payload is id as res==null
}


