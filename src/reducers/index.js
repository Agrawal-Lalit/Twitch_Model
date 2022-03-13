import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'

const INITIAL_STATE={
    id:null,
    isSignedIn:null
}
const actionReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_IN' : return {isSignedIn:true ,id: action.payload}
        case 'SIGN_OUT' : return {...state,isSignedIn:false}
        default : return state
    }
}

const streamReducer=(state={}, action)=>{
 switch(action.type){
     case 'STREAM_CREATE': return {...state ,[action.payload.id]:action.payload}
     case 'STREAM_UPDATE': return {...state ,[action.payload.id]:action.payload}
     case 'STREAM_DELETE': return _.omit(state,action.payload); 
     default : return state;
 }
}

const streamFetchReducer =(streamList={},action)=>{
    switch(action.type){
          case 'STREAMS_FETCH': return {...streamList, ..._.mapKeys(action.payload,'id')};
          default :return streamList;
        }
}

export default combineReducers({
   condition : actionReducer, 
   streams: streamReducer,
   streamList: streamFetchReducer,
   form : formReducer   
   //here form should only be used . we cant use any other word 
});
// If you absolutely must mount it somewhere other than form, you may provide a getFormState(state) function 
// to the reduxForm() decorator, to get the slice of the Redux state where you have mounted the redux-form reducer.
