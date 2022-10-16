import { combineReducers } from "redux";
import { reducer as reduxFormReducer} from 'redux-form';
import oAuthReducer from "./oAuthReducer";
import albumReducer from "./albumReducer";

export default combineReducers({
  oAuth: oAuthReducer,
  form: reduxFormReducer,
  albums: albumReducer,
});
