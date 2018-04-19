import { combineReducers } from "redux";
import { Auth, AuthError } from "./Auth/AuthReducers.js";
import { BanksName } from "./Banks/BanksReducers";
import { Transactions, isGetting } from "./Transaction/TransactionReducers";

export default combineReducers({
  Auth,
  AuthError,
  Transactions,
  isGetting,
  BanksName
});
