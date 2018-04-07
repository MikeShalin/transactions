import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest,authSuccess} from '../../actions/Auth/AuthActions.js';
import {withRouter} from 'react-router-dom';
import PopUp from '../PopUp';
import Input from '../Input/';

export class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:"",
            password:""
        }
    }
    componentDidMount(){
        const {login,password} = localStorage,
              {authSuccess} = this.props;
        if (login && password){
            authSuccess({
                login,
                password
            });
        }
    }
    handleSubmit =(e)=> {
        const {authRequest} = this.props,
              {login,password} = this.state;
        e.preventDefault();
        authRequest({
            login,
            password
        });
        this.setState({
            login:'',
            password:''
        })
    };
    handleChange =(e)=> {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    };
    render(){
        const {login,password} = this.state,
              {AuthError} = this.props;
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <Input
                       name="login"
                       placeholder="Введите логин"
                       type="text"
                       value={login}
                       onChange={this.handleChange}
                   />
                   <Input
                       name="password"
                       placeholder="Введите пароль"
                       type="password"
                       value={password}
                       onChange={this.handleChange}
                   />
                   <input type="submit"/>
               </form>
               {AuthError?<PopUp> Вы ввели неправильный пароль</PopUp>:''}
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
