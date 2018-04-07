import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transactionAdd} from '../../actions/Transaction/TransactionActions';
import {withRouter} from 'react-router-dom';
import Select from '../Select/';
import Input from '../Input/';
import PopUp from '../PopUp/';

export class Transactions extends Component{
    constructor(props){
        super(props);
        this.state = {
            amount:"",
            bank:1,
            textPopUp:"Введите число",
            popUpShow:false
        }
    }
    componentDidUpdate(prevProps) {
        const {Transactions,TransactionError} =this.props;
        if (Transactions.length !== prevProps.Transactions.length)
            this.setState({textPopUp:'Транзакция успешно добавлена',popUpShow:true});
        if(TransactionError && !prevProps.TransactionError)
            this.setState({popUpShow:true});
        if(TransactionError && !prevProps.TransactionError && Transactions.length === prevProps.Transactions.length)
            this.setState({textPopUp:'Введите число'});
    }
    componentDidMount(){
        const {BanksName} = this.props;
        this.setState({initialBank:Math.min.apply(null, BanksName.map(bank => (bank.id)))});
    }
    handleSubmit =(e)=> {
        const {transactionAdd,BanksName} = this.props;
        e.preventDefault();
        transactionAdd(this.state);
        this.setState({
            amount:"",
            bank:Math.min.apply(null, BanksName.map(bank => (bank.id)))
        });
    };
    handleChange =(e)=> {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    };
    render(){
        const {amount,bank,textPopUp,popUpShow} = this.state;
        console.log('BanksName',this.state);
        return(
           <div>
               <form action="" onSubmit={this.handleSubmit}>
                   <Select
                       onChange={this.handleChange}
                       name='bank'
                       value={bank}
                   />
                   <Input
                       name="amount"
                       placeholder="Сумма"
                       type="text"
                       value={amount}
                       onChange={this.handleChange}
                       isRequired={true}
                   />
                   <input type="submit"/>
               </form>
               {popUpShow?<PopUp> {textPopUp} </PopUp>:''}
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        BanksName: state.BanksName,
        TransactionError: state.TransactionError,
        Transactions: state.Transactions,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        transactionAdd: (transactions) => {
            dispatch(transactionAdd(transactions));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Transactions));
