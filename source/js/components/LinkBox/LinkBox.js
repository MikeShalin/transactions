import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest} from '../../actions/Auth/AuthActions.js';
import {Link,withRouter} from 'react-router-dom';

export class LinkBox extends Component{
    handleExit =(e)=> {
        const {authRequest} = this.props;
        e.preventDefault();
        authRequest({
            login:false,
            password:false,
        });

    };
    render(){
        return(
            <ul>
                <li><Link to="/Transactions" component="Transactions">Transactions</Link></li>
                <li><Link to="/Table" component="Table">Table</Link></li>
                <li onClick={this.handleExit}><a href="#">Выход</a></li>
            </ul>

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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LinkBox));
