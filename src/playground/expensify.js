import {createStore,combineReducers} from 'redux';
// import uuid from 'uuid';
//ADD EXPENSE
const addExpense=({id='',description='',note='',createdat=0,amount=0}={})=>({

      type:'ADD_EXPENSE',
      expense:{
          id,
          description,
          note,
          createdat,
          amount
      }
});

//REMOVE EXPENSE
const remove=(item)=>({
      type:'REMOVE',
      id:item.id
})

//EDIT EXPENSE
const editExpensePage=(id,update)=>({
  type:'EDIT_EXPENSE',
  id,
  update
})


//set_By_Text
const set_By_Text=(text)=>({
      type:'FILTER_BY_TEXT',
      text:text
});

//set_By_endDate
const set_By_startDate=(date=undefined)=>({
  type:'FILTER_BY_STARTDATE',
  startDate:date
});

//set_By_endDate
const set_By_endDate=(date=undefined)=>({
  type:'FILTER_BY_ENDDATE',
  endDate:date
});

//sortBy_amount
const sortBy_amount=()=>({
  type:'SORT_BY_AMOUNT',
  sortBy:'amount'

});

//sortBy_amount
const sortBy_date=()=>({
  type:'SORT_BY_DATE',
  sortBy:'date'

});

//_____________________ExpenseReducer___________________________________________//
const expenseReducerDefault=[];
const expenseReducer=(state=Array.from(expenseReducerDefault),action)=>{
      switch(action.type){
        case ('ADD_EXPENSE'):
          return[...state,action.expense];
           
        case ('REMOVE'):return state.filter(item=>{
          return action.id!==item.id;
        })

        case('EDIT_EXPENSE'):return state.map(item=>{
          if(item.id===action.id){
            return{
              ...item,
              ...action.update
            }
          }else{
            return item;
          }
        })

        default:return state;
       }
      
};

//_____________________FilterReducer___________________________________________//
const filterReducerDefault={
  text:'',
  startDate:undefined,
  endDate:undefined,
  sortBy:'' //date or amount
};
const filterReducer=(state=filterReducerDefault,action)=>{
  switch(action.type){
    case 'FILTER_BY_TEXT':return{
      ...state,
      text:action.text
    }
    case 'FILTER_BY_STARTDATE':return{
      ...state,
      startDate:action.startDate
    }
    case 'FILTER_BY_ENDDATE':return{
      ...state,
      endDate:action.endDate
    }
    case 'SORT_BY_AMOUNT':return{
      ...state,
      sortBy:action.sortBy
    }
    case 'SORT_BY_DATE':return{
      ...state,
      sortBy:action.sortBy
    }
    default:return state;
   }
}

const store=createStore(combineReducers({
  expenseReducer:expenseReducer,
  filterReducer:filterReducer
}));

const getFilterExpense=(exp,{text,startDate,endDate,sortBy})=>{

  let hold=exp.filter(expense=>{

    const txtMatch =expense.description.toLowerCase().includes(text.toLowerCase());
    const startingDate = typeof startDate!=='number'||expense.createdat>startDate;
    const endingDate = typeof endDate!=='number'|| expense.createdat<endDate;;
  if(txtMatch && startingDate && endingDate){
    return expense;
  }
  });

  if(sortBy==='amount'){

    hold=hold.sort((a,b)=>(a.amount<b.amount?1:-1))
  }else if(sortBy==='date'){
    console.log('ok');
    hold=hold.sort((a,b)=>(a.createdat<b.createdat?1:-1))
  }
  return hold;
 
}

store.subscribe(()=>{
      const expenses=store.getState().expenseReducer;
      const filters=store.getState().filterReducer;

      const FilterExpense=getFilterExpense(expenses,filters);
      console.log(FilterExpense);
})


// --------DISPATCH FOR expenseReducer------//
let id1=store.dispatch(addExpense({id:1,description:'January rent',note:'abc',createdat:400,amount:900}));

  store.dispatch(addExpense({id:2,description:'February rent',note:'',createdat:3200,amount:2000}));

  store.dispatch(addExpense({id:3,description:'March rent',note:'',createdat:500,amount:1200}));

  store.dispatch(addExpense({id:4,description:'April rent',note:'',createdat:9900,amount:10}));

  // let removeID=(id1.expense.id);

  // remove

  store.dispatch(editExpensePage(2,{description:'December Rent'}))

//--------DISPATCH FOR filtereReducer------//
  // store.dispatch(set_By_Text('feb'));

  // store.dispatch(set_By_startDate());

  // store.dispatch(set_By_startDate(900));

  // store.dispatch(set_By_endDate(1500));

  // store.dispatch(sortBy_amount());

  // store.dispatch(sortBy_date());
const data={
  expenses:[{
    id:1,
    description:'January rent',
    note:'final payment',
    amount:200,
    createdat:0
  }],
  filters:{
    text:'sortBy',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount' //date or amount

  }
}