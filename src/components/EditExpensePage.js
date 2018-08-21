import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../Actions/expenses';
import {startRemoveExpense}  from '../Actions/expenses';
import RemoveItem from './RemoveItem';

const EditExpensePage=(props)=>(
  <div>
      <div className="Header__2nd">
        <div className="Header__2nd__inner">
          <h1>Edit Expense</h1>
        </div>
      </div>
    <ExpenseForm onSubmit={(expense)=>{
       props.dispatch(startEditExpense(props.match.params.id,expense));
       props.history.push('/');
    }} expense={props.expense}/>
    <RemoveItem id={props.match.params.id} onSubmit={(id)=>{
      props.dispatch(startRemoveExpense({id:id}));
      props.history.push('/dashboard');
    }}/>
  </div>
);
export default connect(
  (state,props) => {
    return {
      expense:state.expenseReducer.find(item=>(item.id===props.match.params.id))
    }
  }
)(EditExpensePage);
