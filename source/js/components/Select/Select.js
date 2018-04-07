import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Option from '../Option/';

export class Select extends Component{
    handleSelect =(e)=> {
        const {onChange} = this.props;
        onChange(e);
    };
    render(){
        const {BanksName,name,value} = this.props;
        return (<select
                onChange={this.handleSelect}
                name={name}
                value={value}
                >
            {BanksName?BanksName.map((el,i)=>(
                <Option
                    key={i}
                    name={el.name}
                    value={el.id}
                />
            )):''}
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
