import { SET_COLOR_SCHEME, SET_PRIMARY_NAV } from './siteDataTypes';

export const setPrimaryNav = userInput => ({
  type: SET_PRIMARY_NAV,
  payload: userInput,
});

export const setColorScheme = color => ({
  type: SET_COLOR_SCHEME,
  color,
});
