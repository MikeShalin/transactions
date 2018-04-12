import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transactionAdd} from 'js/actions/Transaction/TransactionActions';
import {PopUp} from 'js/components/PopUp/PopUp';

export class Transactions extends Component{
    constructor(props){
        super(props);
        this.state={
            amount:"",
            textPopUp:"Введите число",
            popUpShow:false,
            bankId:this.findStartId()
        }
    }
    findStartId(){
        const {BanksName}=this.props;
        return Math.min.apply(null,BanksName.map(bank=>(bank.id)));
    }
    handleSubmit=(e)=>{
        const {transactionAdd,BanksName}=this.props,
              {amount,bankId}=this.state;
        e.preventDefault();
        //Проверяю число ли amount
        if(!Number.isNaN(Number(amount))){
            transactionAdd({
                bankId:Number(bankId),
                amount:Number(amount)
            });
            this.setState({
                amount:"",
                bankId:this.findStartId(),
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
            [name]:value
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
        BanksName:state.BanksName
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        transactionAdd:(transactions)=>{
            dispatch(transactionAdd(transactions));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Transactions);
