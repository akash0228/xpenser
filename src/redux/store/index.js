import { combineReducers, createStore,applyMiddleware} from "redux";
import { expenseReducer } from "../reducers/expenses";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer=combineReducers({
    expenses:expenseReducer,
});

const middleware=[thunk];

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;