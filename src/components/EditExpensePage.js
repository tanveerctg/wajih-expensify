import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../Actions/expenses';
const EditExpensePage=(props)=>(
  <div>

    <ExpenseForm onSubmit={(expense)=>{
       props.dispatch(startEditExpense(props.match.params.id,expense))
       props.history.push('/');
    }} expense={props.expense}/>

  </div>
);
export default connect(
  (state,props) => {
    return {
      expense:state.expenseReducer.find(item=>(item.id===props.match.params.id))
    }
  }
)(EditExpensePage);
