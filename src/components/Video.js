import React, { Component } from 'react'
import {Field , reduxForm} from 'redux-form'
import {apiRequest} from '../actions'
import {connect} from 'react-redux'
import { formValues } from 'redux-form';

//reduxForm is just like connect in react-redux
 class Video extends Component {

    renderInput(referenceToFormElement){
      console.log(referenceToFormElement);
      //referenceToFormElement contain input and meta
      //input has name,value,on functions etc and meta has active,touched,visited etc data related to that Field element itself

        return (
          <div className='field'>
            <label>{referenceToFormElement.label}</label>
        <input {... referenceToFormElement.input}/>
          </div>
        
        );
    }

    // componentDidMount(){
    //   // console.log(this.props);
    //    //here whatever mapStateToProps has passed as obj should be incorporated 
    //   //in this.props as this.props ={...this.props , ...mapStateToProps()}
    //   // when component is mount formReducer is an empty object
    //   const formData=this.props.formReducer;
    //   console.log(formData);
    // }

    OnSubmit(formValues){
      console.log(formValues);
    }
  render() {
    return (
         <form className='ui form' onSubmit={this.props.handleSubmit((formValues)=>this.OnSubmit(formValues))}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
         <button className='ui button primary'>Submit</button>
         </form>
    );
  }
}
// const mapStateToProps =(state)=>{
//   // console.log(state);
//   //here state should contain all reducers i.e our reducer condition and formReducer  i.e state
//   // formReducer has formState
//   return state;
// }


const validate=formValues=>{
  return {title:"error in title", 
          description: 'error in description'}
}
// const formWrapper =
export default reduxForm({form :"videoFetcher" ,validate})(Video);  //here form ,validate are special keywords
// export default connect(mapStateToProps,{apiRequest})(formWrapper);