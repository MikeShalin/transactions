import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest,authSuccess,authError} from '../../actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import Option from '../Option/';


export class Auth extends Component{
    // componentDidMount(){
    //     const {login,password} = localStorage,
    //           {authSuccess} = this.props;
    //     if (login && password){
    //         authSuccess({
    //             login,
    //             password
    //         });
    //     }
    // }
    handleSubmit =(e)=> {
        e.preventDefault();
    };
    handleChange =(e)=> {
    };
    render(){
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <Option/>
                   <input type="submit"/>
               </form>
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        Auth:state.Auth,
        AuthError:state.AuthError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authRequest: (logIn) => {
            dispatch(authRequest(logIn));
        },
        authSuccess: (bool) => {
            dispatch(authSuccess(bool))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth));
