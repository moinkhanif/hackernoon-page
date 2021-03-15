import {
  SET_COLOR_SCHEME,
  SET_PRIMARY_NAV,
  SET_LOGIN_STATUS,
} from './siteDataTypes';

export const setPrimaryNav = userInput => ({
  type: SET_PRIMARY_NAV,
  payload: userInput,
});

export const setColorScheme = color => ({
  type: SET_COLOR_SCHEME,
  color,
});

export const setLoginStatus = loginStatus => ({
  type: SET_LOGIN_STATUS,
  loginStatus,
});
