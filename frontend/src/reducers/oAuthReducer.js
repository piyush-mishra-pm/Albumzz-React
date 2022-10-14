import ACTION_TYPES from '../actions/ACTION_TYPES.js';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: payload,
      };

    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };

    default:
      return state;
  }
};
