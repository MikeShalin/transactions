import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class TableRow extends Component{
    render(){
        const {amount,onDelete,BanksName,bankId,i} = this.props;
        return (
            <tr>
                <td><strong>{i}</strong></td>
                <td>{amount}</td>
                <td><i>{BanksName.filter(name=>(name.id===bankId))[0].name}</i></td>
                <td><button onClick={onDelete}>Удалить</button></td>
            </tr>)
    }
}

const mapStateToProps = (state) =>{
    return {
        BanksName: state.BanksName,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TableRow));
