import React,{Component} from 'react';
import AuthComponent from '../Auth/';
import Switcher from '../Switcher/';
import {connect} from "react-redux";
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import {bankNameRequest} from '../../actions/Bank/BankActions';

export class App extends Component {
    componentDidMount(){
        const {bankNameRequest} = this.props;
        const banks = [{id:1, amount: 100, bankId: 1}, {id:2, amount: 200, bankId: 2},{id:3, amount: 300, bankId: 3}],
              banksName = [{id:1, name: 'Сбербанк'}, {id:2, name: 'Югра'},{id:3, name: 'ГазпромБанка'}];
        bankNameRequest();
        if(!localStorage.getItem('banks'))
            localStorage.setItem('banks', JSON.stringify(banks));
        localStorage.setItem('banksName', JSON.stringify(banksName));
    }
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
    return {
        bankNameRequest:()=>{
            dispatch(bankNameRequest());
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
