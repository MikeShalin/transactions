import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest,authSuccess} from 'js/actions/Auth/AuthActions.js';
import Transactions from 'js/components/Transactions/';
import Table from 'js/components/Table/';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class PersonalArea extends Component{
    handleExit=(e)=>{
        const {authRequest}=this.props;
        e.preventDefault();
        authRequest({
            login:false,
            password:false,
        });
    };
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/Table" component="Table">Таблица транзакций</Link></li>
                    <li><Link to="/Transactions" component="Transactions">Добавить транакцию</Link></li>
                    <li><Link to="/" component="exit" onClick={this.handleExit}>Выход</Link></li>
                </ul>
                <Switch>
                    <Route path="/Table" exact component={Table}/>
                    <Route path="/Transactions"  component={Transactions}/>
                    <Redirect from="*" to="/Table"/>
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
            dispatch(authRequest(logIn))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PersonalArea));
