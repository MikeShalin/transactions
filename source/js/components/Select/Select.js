import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Option from '../Option/';

export class Select extends Component{
    render(){
        const {BanksName} = this.props;
        return (<select>
            {BanksName.map((el,i)=>(
                <Option
                    key={i}
                    name={el.name}
                />
            ))}
        </select>)
    }
}

const mapStateToProps = (state) =>{
    return {
        BanksName: state.BanksName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Select));
