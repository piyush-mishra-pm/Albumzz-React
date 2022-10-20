import _ from "lodash";

import ACTION_TYPES from "../actions/ACTION_TYPES";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Same code for modifying state when Creating, getting or editing album.
    case ACTION_TYPES.CREATE_ALBUM: // Uses fallthrough
    case ACTION_TYPES.GET_ALBUM: // Uses fallthrough
    case ACTION_TYPES.EDIT_ALBUM:
      // Key Interpolation syntax:
      return { ...state, [action.payload.id]: action.payload };

    case ACTION_TYPES.DELETE_ALBUM:
      // pay load is the ID itself.
      return _.omit(state, action.payload);

    case ACTION_TYPES.GET_ALBUMS:
      // State stores albums with id as key, and the album object as its value.
      // Using lodash to create a map of (album)id -> album, by extracting id from album object.
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
