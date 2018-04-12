import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transactionAdd,transactionRequest} from 'js/actions/Transaction/TransactionActions';
import PopUp from 'js/components/PopUp/';
import {bankNameRequest} from 'js/actions/Bank/BankActions';
import {withRouter} from 'react-router-dom';

export class Transactions extends Component{
    constructor(props){
        super(props);
        this.state={
            amount:"",
            textPopUp:"Введите число",
            popUpShow:false
        }
    }
    findStartId(){
        const {BanksName}=this.props;
        return Math.min.apply(null,BanksName.map(bank=>(bank.id)));
    }
    componentWillMount() {
        const {bankNameRequest,Transactions,transactionRequest} = this.props;
        if(Transactions.length===0)
            transactionRequest();
        bankNameRequest();
        this.setState({bankId:this.findStartId()});
    }
    handleSubmit=(e)=>{
        const {transactionAdd,BanksName}=this.props,
              {amount}=this.state;
        e.preventDefault();
        //Проверяю число ли amount
        if(!Number.isNaN(Number(amount))){
            transactionAdd(this.state);
            this.setState({
                amount:"",
                bankId:Math.min.apply(null,BanksName.map(bank=>(bank.id))),
                textPopUp:"Транзакция успешно добавлена",
                popUpShow:true
            });
        } else {
            this.setState({
                amount:"",
                textPopUp:"Введите число",
                popUpShow:true
            });
        }
    };
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:Number(value)
        });
    };
    render(){
        const {amount,bankId,textPopUp,popUpShow}=this.state,
              {BanksName}=this.props;
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <select onChange={this.handleChange}
                           name="bankId"
                           value={bankId}
                   >
                       {BanksName?BanksName.map((el,i)=>(
                           <option value={el.id}>{el.name}</option>
                       )):''}
                   </select>
                   <input
                       name="amount"
                       placeholder="Сумма"
                       type="text"
                       value={amount}
                       onChange={this.handleChange}
                       required={true}
                   />
                   <input type="submit"/>
               </form>
               {popUpShow?<PopUp> {textPopUp} </PopUp>:''}
           </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        BanksName:state.BanksName,
        Transactions:state.Transactions,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        transactionAdd:(transactions)=>{
            dispatch(transactionAdd(transactions));
        },
        bankNameRequest:()=>{
            dispatch(bankNameRequest());
        },
        transactionRequest:()=>{
            dispatch(transactionRequest());
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Transactions));
