import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authRequest,authSuccess} from '../../actions/Auth/AuthActions.js';
import {withRouter} from 'react-router-dom';

export class PopUp extends Component{

    render(){
        return(
            <h2>{this.props.children}</h2>
        )
    }

}

const mapStateToProps = (state) =>{
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PopUp));
