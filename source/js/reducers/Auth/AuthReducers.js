import { authSuccess, authError, logOut } from "js/actions/Auth/AuthActions.js";
import { handleAction } from "redux-actions";

export const Auth = (state = false, action) => {
  switch (action.type) {
    case authSuccess.toString():
      return action.payload;
    case logOut.toString():
      return false;
    default:
      return state;
  }
};

export const AuthError = handleAction(
  authError,
  (state, action) => action.payload,
  null
);
