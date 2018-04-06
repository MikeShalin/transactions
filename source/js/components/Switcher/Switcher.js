import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinkBox from '../LinkBox/';
import {authRequest,authSuccess} from '../../actions/Auth/AuthActions.js';
import Transactions from '../Transactions/';
import TableLols from '../TableLols/';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class Switcher extends Component{
    handleExit =(e)=> {
        const {authRequest} = this.props;
        e.preventDefault();
        authRequest({
            login: false,
            password: false,
        });

        // this.props.location.pathname = '/';
    };
    render(){
        console.log(this.props);

        return(
            <div>
                <ul>
                    <li><Link to="/Table" component="Table">TableLols</Link></li>
                    <li><Link to="/Transactions" component="Transactions">Transactions</Link></li>
                    <li><Link to="/" component="exit" onClick={this.handleExit}>Выход</Link></li>
                    {/*<li onClick={this.handleExit}><a href="#">Выход</a></li>*/}
                </ul>
                <Switch>
                    {/*<Redirect from="/exit" to="/"/>*/}
                    <Route path="/Table" exact component={TableLols}/>
                    <Route path="/Transactions"  component={Transactions}/>
                    <Redirect from="*" to="/Table"/>

                    {/*<Route path="/Table" component={Registration}/>*/}
                </Switch>

            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        Auth:state.Auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authRequest:(logIn)=>{
            dispatch(authRequest(logIn))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Switcher));
