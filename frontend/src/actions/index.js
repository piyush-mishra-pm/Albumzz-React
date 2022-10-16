import ACTION_TYPES from "./ACTION_TYPES";
import jsonServerApi from "../apis/json-server-api";

// Authentication related Actions:

export const signIn = (payload) => ({
  type: ACTION_TYPES.SIGN_IN,
  payload,
});

export const signOut = (payload) => ({
  type: ACTION_TYPES.SIGN_OUT,
  payload,
});

// Albums related Actions:

export const createAlbum = (formValues) => async (dispatch) => {
  jsonServerApi.post("/albums", formValues);
};