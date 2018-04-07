import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bankRequest,
        bankDelete} from '../../actions/Bank/BankActions';
import {withRouter} from 'react-router-dom';
import TableRow from '../TableRow/';

export class Table extends Component{

    componentDidMount(){
        const {bankRequest} = this.props;
        bankRequest();
    }
    handleDelete =(id)=>{
        const {bankDelete} = this.props;
        bankDelete(id);
    };
    render(){
        const {Banks,isGetting} = this.props;

        return(
           <div>
               {isGetting?'Идет загрузка':''}
               <table>
                   <tr>
                       <td>№</td>
                       <td>Сумма</td>
                       <td>Наименование банка</td>
                   </tr>
               {Banks?Banks.map(bank => (
                   <TableRow
                       key={bank.id}
                       id = {bank.id}
                       amount = {bank.amount}
                       onDelete = {()=>this.handleDelete(bank.id)}
                       bankId = {bank.bankId}
                       />
               )):''}
               </table>
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        Banks: state.Banks,
        isGetting: state.isGetting,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        bankRequest: () => {
            dispatch(bankRequest());
        },
        bankDelete: (id) => {
            dispatch(bankDelete(id));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Table));
