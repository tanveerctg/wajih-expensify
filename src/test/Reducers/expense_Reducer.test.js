import expense_Reducer from '../../Reducers/expense_Reducer';

//DEFAULT VALUE testing for expenseReducer
const state=[];
test("should test expenseReducer for DEFAULT VALUES which is empty array",()=>{
  expect(expense_Reducer(state,{
    type: '@@INIT'
  })).toEqual([]);
})


const expenses=[
  {
    id:1,
    description:'january rent',
    note:'',
    createdat:1200,
    amount:200
  },
  {
    id:2,
    description:'february rent',
    note:'',
    createdat:400,
    amount:900
  },
  {
    id:3,
    description:'december rent',
    note:'',
    createdat:2200,
    amount:400
  }
]

//ADD Expense
const addExpense={
    type:'ADD_EXPENSE',
    expense:{
      id:4,
      description:'April rent',
      note:'',
      createdat:3000,
      amount:300
  }
   
}
test("should add new expense",()=>{
  expect(expense_Reducer(expenses,addExpense)).toEqual([...expenses,addExpense.expense]);
})

// REMOVE EXPENSE
const removeItem={
  type:'REMOVE',
  id:1
}
test("should remove expense",()=>{
  expect(expense_Reducer(expenses,removeItem)).toEqual([{
    id:2,
    description:'february rent',
    note:'',
    createdat:400,
    amount:900
  },
  {
    id:3,
    description:'december rent',
    note:'',
    createdat:2200,
    amount:400
  }
]);
})

//EDIT EXPENSE

const updatedItem={
    type:'EDIT_EXPENSE',
    id:2,
    update:{
      description:'FOOD',
      note:'',
      createdat:1600,
      amount:2700
  }
}

test("should able to EDIT EXPENSE",()=>{
  expect(expense_Reducer(expenses,updatedItem)).toEqual([
    {
      id:1,
      description:'january rent',
      note:'',
      createdat:1200,
      amount:200
    },
    {
      id:2,
      description:'FOOD',
      note:'',
      createdat:1600,
      amount:2700
  },
    {
      id:3,
      description:'december rent',
      note:'',
      createdat:2200,
      amount:400
    }
  ])
})