import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter.js';
import configureStore from './Store/configureStore';
import {login,logout} from './Actions/auth';
import {sortBy_amount,sortBy_date} from './Actions/filters';
import getFilterExpense from './getFilterExpense/getFilterExpense';
import {startSetExpense} from './Actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
import {provider,firebase} from './firebase/firebase';
import {history} from './routes/AppRouter';
import Loader from './components/Loader';

const store=configureStore();
const jsx=(<Provider store={store}>
            <AppRouter />
          </Provider>);
store.subscribe(()=>{
  const expenses=store.getState().expenseReducer;
  const filters=store.getState().filterReducer;
  const auth=store.getState().authReducer;
  const FilterExpense=getFilterExpense(expenses,filters);

})
ReactDOM.render(<Loader/>,document.querySelector('.app')); 

let hasrendered=true;
const appRender=()=>{

  if(hasrendered){

    setTimeout(()=>{
      ReactDOM.render(jsx,document.querySelector('.app')); 
    },1100);
    hasrendered=false;
  }
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense());
    appRender();
    console.log('login',user.uid);
    console.log('in');
  }else{
    console.log('out');
    appRender();
    store.dispatch(logout());
    history.push('/');
  }
})
