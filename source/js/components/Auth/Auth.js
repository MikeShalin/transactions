import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest,authSuccess,authError} from '../../actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import PopUp from '../PopUp';

export class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:"",
            password:"",
            // isShow:false
        }
    }
    componentDidUpdate(prevProps) {
        // console.log('componentDidUpdate предыдущие пропсы',prevProps);
    //     const {Timer,CharCount,AppState,getTimer,trainingStart} = this.props;
    //     let timerTime = Timer.value;
    //     if(CharCount.value === 0){
    //         trainingStart(AppState+1);
    //     }
    //     if(prevProps.CharCount.value !== CharCount.value){
    //         clearInterval(this.timer);
    //         timerTime = 60;
    //         getTimer(timerTime);
    //         this.timer = this.interval(timerTime,trainingStart,AppState,getTimer);
    //     }
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
              {Auth,AuthError} = this.props;
        console.log('Мы авторизовались?',this.props.AuthError);
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <input
                       type="text"
                       name="login"
                       placeholder="Введите логин"
                       onChange={this.handleChange}
                       value={login}
                   />
                   <input
                       type="password"
                       name="password"
                       placeholder="Введите пароль"
                       onChange={this.handleChange}
                       value={password}
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
