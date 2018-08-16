import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import HelpExpensePage from  '../../components/HelpExpensePage';
import setupTests from '../setupTests';


test("should render HelpExpensePage component correctly",()=>{
  const wrapper=shallow(<HelpExpensePage />);
  expect(toJson(wrapper)).toMatchSnapshot();
})