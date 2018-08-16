import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseForm} from  '../../components/ExpenseForm';
import moment from 'moment';
import setupTests from '../setupTests';
import getFilterExpense from '../getFilterExpense/getFilterExpense.test.js';

test("should render ExpenseForm component correctly",()=>{
  const wrapper=shallow(<ExpenseForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
})

test("should render ExpenseForm component with expense data",()=>{
  const wrapper=shallow(<ExpenseForm expense={getFilterExpense[0]}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
})

test("should render ExpenseForm component with error msg",()=>{

  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  })
  expect(wrapper.state('error')).toEqual(true);
  expect(toJson(wrapper)).toMatchSnapshot();

})

test("should set description on input change",()=>{
  const value="Shirts price";
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('description')).toBe(value);
})

test("should set amount on input change",()=>{
  const value=2999;
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe(value);
})

test("should set note on input change",()=>{
  const value='bought this shirt from gentlepark on february';
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change',{
    target:{value}
  });
  expect(wrapper.state('note')).toBe(value);
})

test("should render ExpenseForm with valid expense data",()=>{
  const onSubmitSpy=jest.fn();
  const wrapper=shallow(<ExpenseForm expense={getFilterExpense[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state('error')).toBe(false);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({...getFilterExpense[0],id:expect.any(String)});
})

test("should set onDateChange",()=>{
  const now=moment().valueOf();
  const wrapper=shallow(<ExpenseForm/>);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdat')).toEqual(now);
})

test("should set onFocusChange",()=>{
  const focused=true;
  const wrapper=shallow(<ExpenseForm/>);

  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('focused')).toBe(focused);
  
})
