//_____________________FilterReducer___________________________________________//
import moment from 'moment';
const filterReducerDefault={
  text:'',
  startDate:moment().startOf('month'),
  endDate:moment().endOf('month'),
  sortBy:'' //date or amount
};

export default (state=filterReducerDefault,action)=>{
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
