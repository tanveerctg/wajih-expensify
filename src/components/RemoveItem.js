import React from 'react';
import { connect } from 'react-redux';
import {startRemoveExpense}  from '../Actions/expenses';
import configureStore from '../Store/configureStore';
const store=configureStore();

const RemoveItem=(props)=>(
  <div>
    <button onClick={()=>{
      {props.expense.forEach((exp)=>{
       if(props.id===exp.id){
        props.dispatch(startRemoveExpense({id:props.id}));
       }
      })}
    }}>Remove Item</button>
  </div>
);

const FilterLink = connect(
  (state) => {
    return {
      expense:state.expenseReducer
    }
  }
)(RemoveItem)

export default FilterLink;