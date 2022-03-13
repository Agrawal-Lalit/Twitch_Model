import React from 'react'
import {Field , reduxForm ,formValueSelector} from 'redux-form'
import {streamCreate ,streamDelete} from '../actions'
import {connect} from 'react-redux'



//reduxForm is just like connect in react-redux
 class Video extends React.Component {

    state={count :1}
    
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

    formSubmitHandler =(formValues)=>{
      console.log(this.props);
      // this.props.streamDelete(this.state.count);
      // let count=this.state.count;
      // this.setState({count : count + 1});
      this.props.streamCreate(formValues);
  }
  render() {
    return (
         <form className='ui form' onSubmit={this.props.handleSubmit(this.formSubmitHandler)}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description" autoSave='false'/>
         <button className='ui button primary'>Submit</button>
         </form>
    );
  }
}



const validate = values => {
  const error = {}
  if (!values.title) {
    error.title = 'Required'
  }
  if (!values.description) {
    error.description = 'Required'
  }
  return error
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
        destroyOnUnmount:true,
        forceUnregisterOnUnmount:true,
        validate})(Video);  //here form ,validate are special keywords

// // Decorate with connect to read form values
export default connect(mapStateToProps,{streamCreate,streamDelete})(formWrapper);







