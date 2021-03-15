import { SET_COLOR_SCHEME, SET_PRIMARY_NAV } from './siteDataTypes';

const initialState = {
  colorScheme: 'dark',
  primaryNav: true,
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

    default:
      return state;
  }
};

export default reducer;
