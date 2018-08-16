import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from  '../../components/NotFoundPage';
import setupTests from '../setupTests';


test("should render NotFoundPage component correctly",()=>{
  const wrapper=shallow(<NotFoundPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
})