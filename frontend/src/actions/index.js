import ACTION_TYPES from "./ACTION_TYPES";

export const signIn = (payload) => ({
  type: ACTION_TYPES.SIGN_IN,
  payload,
});

export const signOut = (payload) => ({
  type: ACTION_TYPES.SIGN_OUT,
  payload,
});
