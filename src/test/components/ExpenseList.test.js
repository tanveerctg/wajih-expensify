import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from  '../../components/ExpenseList';
import setupTests from '../setupTests';
import getFilterExpense from '../getFilterExpense/getFilterExpense.test.js';

test("should render ExpenseList correctly",()=>{
  const wrapper=shallow(<ExpenseList expense={ getFilterExpense }/>);
  expect(toJson(wrapper)).toMatchSnapshot();
})