export const auth = {
  login: "admin",
  password: "admin"
};
export const authorization = logIn => {
  let isAuthorized = false;
  isAuthorized = logIn.login === auth.login && logIn.password === auth.password;
  return isAuthorized;
};
