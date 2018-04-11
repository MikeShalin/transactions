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
            bank:'lol',
            textPopUp:"Введите число",
            popUpShow:false
        }
    }
    componentDidUpdate(prevProps){
        const {Transactions,TransactionError,BanksName}=this.props;
        if ((Transactions.length!==prevProps.Transactions.length) && (prevProps.Transactions.length!==0 && Transactions.length!==0))
            this.setState({textPopUp:'Транзакция успешно добавлена',popUpShow:true});
        if(TransactionError && !prevProps.TransactionError)
            this.setState({popUpShow:true});
        if(TransactionError && !prevProps.TransactionError && Transactions.length === prevProps.Transactions.length)
            this.setState({textPopUp:'Введите число'});
        if(prevProps.BanksName.length===0 && BanksName.length!==0)
            this.setState({bank:Math.min.apply(null,BanksName.map(bank=>(bank.id)))});
    }
    componentWillMount() {
        const {bankNameRequest,Transactions,transactionRequest,BanksName} = this.props;
        if(Transactions.length===0)
            transactionRequest();
        bankNameRequest();
        this.setState({bank:Math.min.apply(null,BanksName.map(bank=>(bank.id)))});
    }
    handleSubmit=(e)=>{
        const {transactionAdd,BanksName}=this.props;
        e.preventDefault();
        console.log('перед отпарвкой',this.state);
        transactionAdd(this.state);
        this.setState({
            amount:"",
            bank:Math.min.apply(null,BanksName.map(bank=>(bank.id)))
        });
    };
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        });
    };
    render(){
        const {amount,bank,textPopUp,popUpShow}=this.state,
              {BanksName}=this.props;
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <select onChange={this.handleChange}
                           name="bank"
                           value={bank}
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
        TransactionError:state.TransactionError,
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
