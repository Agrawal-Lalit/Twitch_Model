import React, { Component } from 'react'
import {actionSignIn ,actionSignOut} from '../actions'
import {connect} from 'react-redux'
const AuthId='119001645891-20k9ihc95104fdmig7s0qg15rs0kv8bv.apps.googleusercontent.com' ;



class GoogleAuth extends Component {



    componentDidMount(){
      // const {userId,isSignedIn,actionSignIn,actionSignOut} = this.props;
      // console.log(this.props);

        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:AuthId,
                scope:'email'
            }).then( ()=>{this.auth=window.gapi.auth2.getAuthInstance();
                    this.stateUpdate();
                    this.auth.isSignedIn.listen(this.stateUpdate);
                         }
                  );
        });
    }
    stateUpdate=()=>{
      this.auth.isSignedIn.get() ? this.props.actionSignIn(window.gapi.client.getToken().access_token) :this.props.actionSignOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn===null)
        return <button className="ui loading button">Loading</button>;
        else if(this.props.isSignedIn)
        return (
            <button className="ui google red button" onClick={()=>{this.auth.signOut() ;window.alert('you are about to singed out')}}>
            <i className="google  icon"></i>
             SignOut
            </button>
        );
        else 
        return (<button className="ui google green button" onClick={this.auth.signIn}>
        <i className="google icon"></i>
        SignIn 
      </button>);
    }


  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}
const mapStateToProps=(state)=>{
  // console.log(state);
return {userId: state.condition.id,
        isSignedIn: state.condition.isSignedIn};
}

export default connect(mapStateToProps ,{actionSignIn,actionSignOut})(GoogleAuth);



