import { SET_COLOR_SCHEME, SET_LOGIN_STATUS, SET_PRIMARY_NAV } from './siteDataTypes';

const initialState = {
  colorScheme: 'dark',
  primaryNav: true,
  loginStatus: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIMARY_NAV:
      return {
        ...state,
        primaryNav: action.payload,
      };
    case SET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: action.color,
      };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.loginStatus,
      };

    default:
      return state;
  }
};

export default reducer;
