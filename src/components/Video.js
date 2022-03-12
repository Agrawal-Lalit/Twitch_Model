import React, { Component } from 'react'
import {Field , reduxForm ,formValueSelector} from 'redux-form'
import {apiRequest} from '../actions'
import {connect} from 'react-redux'



//reduxForm is just like connect in react-redux
 class Video extends Component {

    renderInput(referenceToFormElement){
      // console.log(referenceToFormElement);
      const {touched, error}=referenceToFormElement.meta;
        return (
          <div className='field'>
            <label>{referenceToFormElement.label}</label>
            <input {... referenceToFormElement.input}/>
            {touched && error && <span>{error}</span>}
          </div>
        
        );
    }

   
  render() {
    return (
         <form className='ui form' onSubmit={this.props.handleSubmit(()=>console.log(this.props))}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
         <button className='ui button primary'>Submit</button>
         </form>
    );
  }
}



const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  return errors
}

const selector = formValueSelector('videoFetcher'); // <-- same as form name

const mapStateToProps =(state)=>{
// can select values individually
const {title,description} = selector(state, 'title' ,'description');
  return { title, description};
}
// Decorate with redux-form

const formWrapper = reduxForm({
        form :"videoFetcher",   // a unique identifier for this form
        destroyOnUnmount:false,
        forceUnregisterOnUnmount:true,
        validate})(Video);  //here form ,validate are special keywords

// // Decorate with connect to read form values
export default connect(mapStateToProps,{apiRequest})(formWrapper);







