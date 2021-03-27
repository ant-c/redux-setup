// Represents the entire state
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import imageReducer from './image/image.reducer';

// Values represent reducers we wrote
export default combineReducers({
  user: userReducer,
  image: imageReducer
});