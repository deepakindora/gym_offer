import { legacy_createStore as createStore, combineReducers } from 'redux';
import employeeReducer from './reducers/employeeReducer';
import offerReducer from './reducers/offerReducer';
const rootReducer = combineReducers({ employeeReducer, offerReducer });
const store = createStore(rootReducer);
export default store;
