import React, {Component} from 'react';
import {connect} from 'react-redux';
import Transactions from '../Transactions/';

import Table from '../Table/';

import {authRequest,authSuccess} from '../../actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class PopUp extends Component{

    render(){
        return(
            <h2>{this.props.children}</h2>
        )
    }

}

const mapStateToProps = (state) =>{
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        authRequest: (logIn)=>{
            dispatch(authRequest(logIn))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PopUp));
