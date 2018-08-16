import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import Header from  '../../components/Header';
import setupTests from '../setupTests';


test("should render HEADER component correctly",()=>{
  const wrapper=shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
})