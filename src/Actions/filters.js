//set_By_Text
export const set_By_Text=(text)=>({
  type:'FILTER_BY_TEXT',
  text:text
});

//set_By_endDate
export const set_By_startDate=(date)=>({
type:'FILTER_BY_STARTDATE',
startDate:date
});

//set_By_endDate
export const set_By_endDate=(date)=>({
type:'FILTER_BY_ENDDATE',
endDate:date
});

//sortBy_amount
export const sortBy_amount=()=>({
type:'SORT_BY_AMOUNT',
sortBy:'amount'

});

//sortBy_amount
export const sortBy_date=()=>({
type:'SORT_BY_DATE',
sortBy:'date'

});
