import {addExpense,remove,editExpensePage} from '../../Actions/expenses';
import uuid from 'uuid';

test("should generate addExpense with info",()=>{
  const data={
    description:'january',
    note:'rent',
    createdat:1200,
    amount:600
  }

  expect(addExpense(data)).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      ...data
  }
  })
})

test("should generate addExpense with no info",()=>{
  const data={}

  expect(addExpense(data)).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      description:'',
      note:'',
      createdat:0,
      amount:0
  }
  })
})

test("should remove expense with id=1",()=>{
  const item={
    id:1
  }
  expect(remove(item)).toEqual({
    type:'REMOVE',
    id:item.id
  })
})

test("should edit expense with id=1",()=>{
  const update={
    description:'October rent',
    note:'food'
  }
  expect(editExpensePage(1,update)).toEqual({
    type:'EDIT_EXPENSE',
    id:1,
    update
  })
})
