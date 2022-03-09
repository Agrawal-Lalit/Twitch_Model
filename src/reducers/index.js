import {combineReducers} from 'redux'

const INITIAL_STATE={
    id:null,
    isSignedIn:null
}
const actionReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_IN' : return {...state,isSignedIn:true}
        case 'SIGN_OUT' : return {...state,isSignedIn:false}
        default : return state
    }
}
export default combineReducers({
   condition :actionReducer,
});