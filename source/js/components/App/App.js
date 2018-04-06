import React,{Component} from 'react';
import AuthComponent from '../Auth/';
import Transactions from '../Transactions/';
import Table from '../Table/';
import LinkBox from '../LinkBox/';
import {connect} from "react-redux";
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class App extends Component {

    render() {
        const {Auth} = this.props;
        console.log("Компонента app auth:",Auth);

        return (
            <div>
                {Auth?<Table/>:<AuthComponent/>}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log("Компонента app auth:",state);

    return {
        Auth:state.Auth
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        // getProductList: (productList) => {
        //     dispatch(getProductList(productList));
        // },
        // addNewProduct: (product) => {
        //     dispatch(addNewProduct(product));
        // },
        // handleEdit: (product) => {
        //     dispatch(handleEdit(product));
        // },
        // updateDoneRow: (ID) => {
        //     dispatch(updateDoneRow(ID));
        // },
        // deleteProduct: (ID) => {
        //     dispatch(deleteProduct(ID));
        // }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
