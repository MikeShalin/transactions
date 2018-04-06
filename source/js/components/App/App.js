import React,{Component} from 'react';
import AuthComponent from '../Auth/';
import Transactions from '../Transactions/';
import Switcher from '../Switcher/';
import LinkBox from '../LinkBox/';
import {connect} from "react-redux";
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class App extends Component {

    render() {
        const {Auth} = this.props;
        return (
            <div>
                {Auth?<Switcher/>:<AuthComponent/>}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        Auth:state.Auth
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
