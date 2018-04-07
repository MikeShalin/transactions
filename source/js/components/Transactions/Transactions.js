import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBankTransactions} from '../../actions/Bank/BankActions.js';
import {withRouter} from 'react-router-dom';
import Select from '../Select/';
import Input from '../Input/';
import PopUp from '../PopUp/';

export class Transactions extends Component{
    constructor(props){
        super(props);
        const {BanksName} = this.props;
        this.initialBank=Math.min.apply(null, BanksName.map(bank => (bank.id)));
        this.state = {
            amount:"",
            bank:this.initialBank,
            textPopUp:"Введите число",
            popUpShow:false
        }
    }
    componentDidUpdate(prevProps) {
        const {Banks,BankError} =this.props;
        if (Banks.length !== prevProps.Banks.length)
            this.setState({textPopUp:'Транзакция успешно добавлена',popUpShow:true});
        if(BankError && !prevProps.BankError)
            this.setState({popUpShow:true});

    }
    handleSubmit =(e)=> {
        const {addBankTransactions} = this.props;
        e.preventDefault();
        addBankTransactions(this.state);
        this.setState({
            amount:"",
            bank:this.initialBank
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
               {/*<PopUp> {textPopUp} </PopUp>*/}
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        BanksName: state.BanksName,
        BankError: state.BankError,
        Banks: state.Banks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBankTransactions: (transactions) => {
            dispatch(addBankTransactions(transactions));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Transactions));
