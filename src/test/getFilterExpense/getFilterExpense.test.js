
import getFilterExpense from '../../getFilterExpense/getFilterExpense';

//EXPENSES
 const expenses=[
  {
     id:'1',
    description:'January',
    note:'',
    createdat:1300,
    amount:2000
  },
  { 
    id:'2',
    description:'May',
    note:'',
    createdat:900,
    amount:4000
  },
  {
    id:'3',
    description:'February',
    note:'',
    createdat:2500,
    amount:1000
  }
];
export default expenses;
//FILTERS EXPENSES BY TEXT
const search={
  text:'feb',
  note:'',
  sortBy:''
};

test("will filter all expenses by text",()=>{

  expect(getFilterExpense(expenses,search)).toEqual([expenses[2]])
});

//FILTERS EXPENSES BY DATE PICKER
const range={
  startDate:1100,
  endDate:2000
}
test("should test all expenses provinding startDate and endDate",()=>{

  expect(getFilterExpense(expenses,range)).toEqual([expenses[0]])
});

//SORT EXPENSES BY AMOUNT

test("sorts expenses by amount",()=>{

  expect(getFilterExpense(expenses,{sortBy:'amount'})).toEqual([expenses[1],expenses[0],expenses[2]])
});

//SORT EXPENSES BY DATE

test("sorts expenses by date",()=>{

  expect(getFilterExpense(expenses,{sortBy:'date'})).toEqual([expenses[2],expenses[0],expenses[1]])
});