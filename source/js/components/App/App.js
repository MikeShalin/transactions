import React, { Component } from "react";
import AuthComponent from "js/components/Auth/";
import { authRequest, logOut, authError } from "js/actions/Auth/AuthActions.js";
import Table from "js/components/Table/";
import { connect } from "react-redux";
import { withRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Transactions from "js/components/Transactions/";

export class App extends Component {
  handleExit = e => {
    const { logOut, authError } = this.props;
    e.preventDefault();
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    authError(false);
    logOut();
  };
  render() {
    const { Auth } = this.props;
    return (
      <div>
        {Auth ? (
          <ul>
            <li>
              <Link to="/Table" component="Table">
                Таблица транзакций
              </Link>
            </li>
            <li>
              <Link to="/Transactions" component="Transactions">
                Добавить транзакцию
              </Link>
            </li>
            <li>
              <Link to="/exit" component="exit" onClick={this.handleExit}>
                Выход
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
        <Switch>
          {!Auth ? <Route path="/" exact component={AuthComponent} /> : ""}
          {!Auth ? <Redirect from="/Table" to="/" /> : ""}
          <Route path="/Table" component={Table} />
          {!Auth ? <Redirect from="/Transactions" to="/" /> : ""}
          <Route path="/Transactions" component={Transactions} />
          <Redirect from="*" to={Auth ? "/Table" : "/"} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
    authError: bool => {
      dispatch(authError(bool));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
