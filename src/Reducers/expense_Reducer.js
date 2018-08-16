
//_____________________ExpenseReducer___________________________________________//
const expenseReducerDefault=[];
export default (state=Array.from(expenseReducerDefault),action)=>{
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
        case('SET_EXPENSE'):
          return action.expenses;

        default:return state;
       }
       
};

