import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilterExpense from '../getFilterExpense/getFilterExpense';
export const ExpenseList=(props)=>(
  <div className="expenseList">
    {<div className="expenseList__1stPart">
      <span>Expense</span>
      <span>Amount</span>
    </div>}
    {
      props.expense.map((exp)=>(<ExpenseListItem key={exp.id} {...exp}/>))   
    }
  </div>
);
export default connect(
  (state) => {
    return {
      expense:getFilterExpense(state.expenseReducer,state.filterReducer).hold
    }
  }
)(ExpenseList);