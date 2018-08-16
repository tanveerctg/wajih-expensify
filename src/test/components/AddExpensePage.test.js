import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from  '../../components/AddExpensePage';
import setupTests from '../setupTests';
import getFilterExpense from '../getFilterExpense/getFilterExpense.test.js';
import { addExpense } from '../../Actions/expenses';

test("should render AddExpensePage correctly",()=>{
  const history={push:jest.fn()};
  const dispatch=jest.fn();
  const wrapper=shallow(<AddExpensePage dispatch={dispatch} history={history.push} />);
  expect(toJson(wrapper)).toMatchSnapshot();
})

test("should set ExpenseForm in AddExpensePage",()=>{
  const history={push:jest.fn()};
  const dispatch=jest.fn();
  const wrapper=shallow(<AddExpensePage dispatch={dispatch} history={history.push} />);
  wrapper.find('withStyles(ExpenseForm)').prop('onSubmit')({...getFilterExpense[0]});
  expect(dispatch).toHaveBeenLastCalledWith(addExpense({...getFilterExpense[0]}));
  console.log(component.debug());
  // expect(history).toHaveBeenLastCalledWith('/');
})