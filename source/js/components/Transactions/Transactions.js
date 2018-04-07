import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBankTransactions} from '../../actions/Bank/BankActions.js';
import {withRouter} from 'react-router-dom';
import Select from '../Select/';
import Input from '../Input/';

export class Transactions extends Component{
    constructor(props){
        super(props);
        const {BanksName} = this.props;
        this.state = {
            amount:"",
            bank:Math.min.apply(null, BanksName.map(bank => (bank.id))),
        }
    }
    handleSubmit =(e)=> {
        const {addBankTransactions} = this.props;
        e.preventDefault();
        addBankTransactions(this.state);
    };
    handleChange =(e)=> {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    };
    render(){
        const {amount,bank} = this.state;
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
           </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        BanksName: state.BanksName
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
