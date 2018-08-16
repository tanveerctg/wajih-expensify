import {set_By_Text,set_By_startDate,set_By_endDate,sortBy_amount,sortBy_date} from '../../Actions/filters';


test("shoud generate FILTER_BY_TEXT  with text value",()=>{

  expect(set_By_Text('january')).toEqual({
    type:'FILTER_BY_TEXT',
    text:'january'
  });
})

test("shoud generate set_By_startDate  with date value",()=>{

  expect(set_By_startDate(12)).toEqual({
    type:'FILTER_BY_STARTDATE',
    startDate:12
  });
});

test("shoud generate set_By_endDate  with date value",()=>{

  expect(set_By_endDate(20)).toEqual({
    type:'FILTER_BY_ENDDATE',
    endDate:20
  });
})

test("should generate sortBy_amount",()=>{
  expect(sortBy_amount()).toEqual({
    type:'SORT_BY_AMOUNT',
    sortBy:'amount'
  })
})

test("should generate sortBy_date",()=>{
  expect(sortBy_date()).toEqual({
    type:'SORT_BY_DATE',
    sortBy:'date'
  })
})
