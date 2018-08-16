import React from 'react';
import { Link } from 'react-router-dom';
import RemoveItem from './RemoveItem';
import { connect } from 'react-redux';
import getFilterExpense from '../getFilterExpense/getFilterExpense';

const ExpenseListItem=({id,description,createdat,amount})=>(
  <div>
    <Link to={`edit/${id}`} ><h3>{description}</h3></Link>
    <p>created at-{createdat}</p>
    <p>amount -{amount}</p>
    <RemoveItem id={id}/>
    <br/>
  </div>
);

export default ExpenseListItem;

