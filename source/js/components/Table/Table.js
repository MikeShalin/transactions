import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transactionRequest,transactionDelete} from '../../actions/Transaction/TransactionActions';

import {withRouter} from 'react-router-dom';
import TableRow from '../TableRow/';

export class Table extends Component{

    componentDidMount(){
        const {transactionRequest} = this.props;
        transactionRequest();
    }
    handleDelete =(id)=>{
        const {transactionDelete} = this.props;
        transactionDelete(id);
    };
    render(){
        const {Transactions,isGetting} = this.props;
        return(
           <div>
               {isGetting?'Идет загрузка':''}
               <table>
                   <tr>
                       <td>№</td>
                       <td>Сумма</td>
                       <td>Наименование банка</td>
                   </tr>
               {Transactions.map(bank => (
                   <TableRow
                       key={bank.id}
                       id = {bank.id}
                       amount = {bank.amount}
                       onDelete = {()=>this.handleDelete(bank.id)}
                       bankId = {bank.bankId}
                   />
               ))}
               </table>
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        Transactions: state.Transactions,
        isGetting: state.isGetting,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        transactionRequest: () => {
            dispatch(transactionRequest());
        },
        transactionDelete: (id) => {
            dispatch(transactionDelete(id));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Table));
