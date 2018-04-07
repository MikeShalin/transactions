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
        console.log('Transactions',Transactions);
        return(
           <div>
               {isGetting?'Идет загрузка':''}
               <table>
                   <tr>
                       <td>№</td>
                       <td>Сумма</td>
                       <td>Наименование банка</td>
                   </tr>
               {Transactions.length !== 0?Transactions.map((transaction,i) => (
                   <TableRow
                       key={transaction.id}
                       i={i+1}
                       id = {transaction.id}
                       amount = {transaction.amount}
                       onDelete = {()=>this.handleDelete(transaction.id)}
                       bankId = {transaction.bankId}
                   />
               )):'У вас пока нет транзакций'}
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
