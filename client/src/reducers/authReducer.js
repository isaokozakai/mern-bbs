
const initialState = {
  token: localStorage.getItem('token'),
  isAuthnticated: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        ...action.user,
        isAuthenticated: true
      }
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}