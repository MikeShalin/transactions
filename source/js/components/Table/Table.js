import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transactionRequest,transactionDelete} from 'js/actions/Transaction/TransactionActions';
import {BankRow} from 'js/components/BankRow/BankRow';
import {bankNameRequest} from 'js/actions/Bank/BankActions';

export class Table extends Component{
    componentWillMount(){
        const {transactionRequest,bankNameRequest}=this.props;
        bankNameRequest();
        transactionRequest();
    }
    handleDelete(id){
        const {transactionDelete}=this.props;
        transactionDelete(id);
    };
    render(){
        const {BanksName,Transactions,isGetting}=this.props;
        const names=new Map(BanksName.map(el=>[el.id,el.name]));
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
                   <BankRow
                       key={transaction.id}
                       i={i+1}
                       amount={transaction.amount}
                       onDelete={this.handleDelete.bind(this,transaction.id)}
                       bankName={names.get(transaction.bankId)}
                   />
               )):'У вас пока нет транзакций'}
               </table>
           </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        BanksName:state.BanksName,
        Transactions:state.Transactions,
        isGetting:state.isGetting
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        transactionRequest:()=>{
            dispatch(transactionRequest());
        },
        transactionDelete:(id)=>{
            dispatch(transactionDelete(id));
        },
        bankNameRequest:()=>{
            dispatch(bankNameRequest());
        }
}
};

export default connect(mapStateToProps,mapDispatchToProps)(Table);
