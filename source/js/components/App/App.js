import React,{Component} from 'react';
import AuthComponent from 'js/components/Auth/';
import {authRequest} from 'js/actions/Auth/AuthActions.js';
import Table from 'js/components/Table/';
import {connect} from "react-redux";
import {withRouter,Switch,Redirect,Route,Link} from 'react-router-dom';
import {bankNameRequest} from 'js/actions/Bank/BankActions';
import Transactions from 'js/components/Transactions/';

export class App extends Component{
    handleExit=(e)=>{
        const {authRequest}=this.props;
        e.preventDefault();
        authRequest({
            login:false,
            password:false,
        });
    };
    render(){
        const {Auth}=this.props;
        return(
            <div>
                {Auth?
                <ul>
                    <li><Link to="/" component="Table">Таблица транзакций</Link></li>
                    <li><Link to="/Transactions" component="Transactions">Добавить транакцию</Link></li>
                    <li><Link to="/exit" component="exit" onClick={this.handleExit}>Выход</Link></li>
                </ul>:""
                }
                <Switch>
                    <Route path="/" exact component={Auth?Table:AuthComponent}/>
                    <Route path="/Transactions"  component={Transactions}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        Auth:state.Auth
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        authRequest:(logIn)=>{
            dispatch(authRequest(logIn));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
