import filter_Reducer from '../../Reducers/filter_Reducer';
import moment from 'moment';

const filterReducerDefault={
  text:'',
  startDate:moment().startOf('month'),
  endDate:moment().endOf('month'),
  sortBy:'' //date or amount
};


//DEFAULT VALUE testing for filterReducer

test("should test filterReducer for DEFAULT VALUES which is filterReducerDefault",()=>{
  expect(filter_Reducer(filterReducerDefault,{
    type: '@@INIT'
  })).toEqual(filterReducerDefault);
})

//FILTER EXPENSES by text

const filterByText={
  type:'FILTER_BY_TEXT',
  text:'February'
}
const resultForText={
  text:'February',
  startDate:moment().startOf('month'),
  endDate:moment().endOf('month'),
  sortBy:'' //date or amount
}
test("should test expenses by text",()=>{
  expect(filter_Reducer(filterReducerDefault,filterByText)).toEqual(resultForText);
})

//setup startDate for filtering expenses

const startDate={
  type:'FILTER_BY_STARTDATE',
  startDate:12
}
const resultForstartDate={
  text:'',
  startDate:startDate.startDate,
  endDate:moment().endOf('month'),
  sortBy:'' //date or amount
}
test("should set filterReducerDefault with startDate 12",()=>{
  expect(filter_Reducer(filterReducerDefault,startDate)).toEqual(resultForstartDate);
})