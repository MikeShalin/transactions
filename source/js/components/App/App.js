import React,{Component} from 'react';
import AuthComponent from 'js/components/Auth/';
import PersonalArea from 'js/components/PersonalArea/';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {bankNameRequest} from 'js/actions/Bank/BankActions';

export class App extends Component{
    render(){
        const {Auth}=this.props;
        return(
            <div>
                {Auth?<PersonalArea/>:<AuthComponent/>}
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
        bankNameRequest:()=>{
            dispatch(bankNameRequest());
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
