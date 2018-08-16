import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilterExpense from '../getFilterExpense/getFilterExpense';
export const ExpenseList=(props)=>(
  <div>
    {props.expense.length===0?<h1>No expenses available</h1>: <h1>Expense List</h1>}
    <h2>Total Expense:{props.totalExpense}</h2>
    {
      props.expense.map((exp)=>(<ExpenseListItem key={exp.id} {...exp}/>))   
    }
  </div>
);
export default connect(
  (state) => {
    return {
      expense:getFilterExpense(state.expenseReducer,state.filterReducer).hold,
      totalExpense:getFilterExpense(state.expenseReducer,state.filterReducer).totalExpense
    }
  }
)(ExpenseList);