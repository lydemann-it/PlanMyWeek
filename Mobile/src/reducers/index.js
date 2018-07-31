import {combineReducers} from 'redux';
import temp_reducer from './temp_reducer';

export default combineReducers({
    temp: temp_reducer
});
