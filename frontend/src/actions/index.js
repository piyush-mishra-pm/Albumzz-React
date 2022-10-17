import ACTION_TYPES from "./ACTION_TYPES";
import history from "../history";
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

export const createAlbum = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().oAuth;
  const createResponse = await jsonServerApi.post("/albums", { ...formValues, userId });
  dispatch({ type: ACTION_TYPES.CREATE_ALBUM, payload: createResponse.data });
  history.push("/");
};

export const getAlbum = (id) => async (dispatch) => {
  const getAlbumResponse = await jsonServerApi.get(`/albums/${id}`);
  dispatch({ type: ACTION_TYPES.GET_ALBUM, payload: getAlbumResponse.data });
};

export const getAlbums = () => async (dispatch) => {
  const getAlbumsResponse = await jsonServerApi.get("/albums");
  dispatch({ type: ACTION_TYPES.GET_ALBUMS, payload: getAlbumsResponse.data });
};

export const deleteAlbum = (id) => async (dispatch) => {
  await jsonServerApi.delete(`/albums/${id}`);
  dispatch({ type: ACTION_TYPES.DELETE_ALBUM, payload: id });
  history.push("/");
};

export const editAlbum = (id, formValues) => async (dispatch) => {
  // patch better than put here, as we don't want to entirely replace existing album with edited one.
  // Only need to update some properties on existing album. Patch more suitable than Put.
  const editAlbumResponse = await jsonServerApi.patch(`/albums/${id}`, formValues);
  dispatch({
    type: ACTION_TYPES.EDIT_ALBUM,
    payload: editAlbumResponse.data,
  });
  history.push("/");
};
