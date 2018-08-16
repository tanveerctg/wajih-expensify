import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter.js';
import configureStore from './Store/configureStore';
import {addExpense} from './Actions/expenses';
import {sortBy_amount,sortBy_date} from './Actions/filters';
import getFilterExpense from './getFilterExpense/getFilterExpense';
import {startSetExpense} from './Actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
const store=configureStore();

store.subscribe(()=>{
  const expenses=store.getState().expenseReducer;
  const filters=store.getState().filterReducer;

  const FilterExpense=getFilterExpense(expenses,filters);
 
  console.log(expenses);
})
ReactDOM.render(<p>Loading...</p>,document.querySelector('.app')); 

store.dispatch(startSetExpense());

setTimeout(()=>{
  ReactDOM.render(<Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('.app')); 
},1500);
