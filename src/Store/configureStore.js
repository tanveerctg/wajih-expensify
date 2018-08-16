import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import expenseReducer from '../Reducers/expense_Reducer';
import filterReducer from '../Reducers/filter_Reducer';
import thunk from 'redux-thunk';
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
  const store=createStore(combineReducers({
    expenseReducer:expenseReducer,
    filterReducer:filterReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);

  return store;
}