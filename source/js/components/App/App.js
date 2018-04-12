import React,{Component} from 'react';
import AuthComponent from 'js/components/Auth/';
import {authRequest,logOut} from 'js/actions/Auth/AuthActions.js';
import Table from 'js/components/Table/';
import {connect} from "react-redux";
import {withRouter,Switch,Redirect,Route,Link} from 'react-router-dom';
import Transactions from 'js/components/Transactions/';

export class App extends Component{
    componentWillMount() {
        const {authRequest,Auth}=this.props,
              login=localStorage.getItem('login'),
              password=localStorage.getItem('password');
        if (!Auth&&login&&password){
            authRequest({
                login,
                password
            });
        }
    }
    handleExit=(e)=>{
        const {logOut}=this.props;
        e.preventDefault();
        logOut();
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
                    {!Auth?<Redirect from="/Transactions" to="/"/>:""}
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
    return {
        authRequest: (logIn) => {
            dispatch(authRequest(logIn));
        },
        logOut: () => {
            dispatch(logOut());
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
