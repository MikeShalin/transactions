import {connect} from "react-redux";
import Transactions from "../Transactions";
import AuthComponent from "../Auth";
import Table from "../Table";
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import {Component} from "react";

export class Switch extends Component {

    render() {
        const {Auth} = this.props;
        console.log("Компонента app auth:",Auth);
        switch (Auth){
            case
        }
        return (
            <div>
                {/*<ul>*/}
                    {/*<li><Link to="/Transactions" component="Transactions">Transactions</Link></li>*/}
                    {/*<li><Link to="/Table" component="Table">Table</Link></li>*/}
                {/*</ul>*/}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Switch));
