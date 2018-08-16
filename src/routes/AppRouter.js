import React from 'react';
import { BrowserRouter, Route,Switch,NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage' ;
import AddExpensePage from '../components/AddExpensePage' ;
import EditExpensePage from '../components/EditExpensePage' ;
import NotFoundPage from '../components/NotFoundPage' ;
import HelpExpensePage from '../components/HelpExpensePage' ;
import LoginPage from '../components/LoginPage' ;

const AppRouter=()=>(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact={true}  component={LoginPage}/>
        <Route path="/dashboard" component={ExpenseDashboardPage}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;