import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bankRequest,
        bankDelete} from '../../actions/Bank/BankActions';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

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
        const {Banks,isGetting,BanksName} = this.props;

        return(
           <div>
               {isGetting?'Идет загрузка':''}
               <table>
                   <tr>
                       <td>№</td>
                       <td>Сумма</td>
                       <td>Наименование банка</td>
                       <td>Удалить</td>
                   </tr>
               {Banks?Banks.map(bank => (
                   <tr key={bank.id}>
                       <td><strong>{bank.id}</strong></td>
                       <td>{bank.amount}</td>
                       <td><i>{BanksName.filter(name=>(name.id===bank.bankId))[0].name}</i></td>
                       <td><button onClick={()=>this.handleDelete(bank.id)}>Удалить</button></td>
                   </tr>
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
        BanksName: state.BanksName
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
