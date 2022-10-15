import { combineReducers } from "redux";
import { reducer as reduxFormReducer} from 'redux-form';
import oAuthReducer from "./oAuthReducer";

export default combineReducers({
  oAuth: oAuthReducer,
  form: reduxFormReducer,
});
