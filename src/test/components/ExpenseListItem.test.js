import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from  '../../components/ExpenseListItem';
import setupTests from '../setupTests';
import getFilterExpense from '../getFilterExpense/getFilterExpense.test.js';

test("should render ExpenseListItem correctly",()=>{
  const wrapper=shallow(<ExpenseListItem { ...getFilterExpense[0] }/>);
  expect(toJson(wrapper)).toMatchSnapshot();
})