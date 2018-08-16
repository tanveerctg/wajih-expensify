import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from  '../../components/ExpenseDashboardPage';
import setupTests from '../setupTests';


test("should render ExpenseDashboardPage component correctly",()=>{
  const wrapper=shallow(<ExpenseDashboardPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
})