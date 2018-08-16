import React from 'react';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../Actions/expenses';
import { connect } from 'react-redux';
// export const AddExpensePage=(props)=>(
//   <div>
//     <ExpenseForm onSubmit={({id,description,note,createdat,amount})=>{
//      props.dispatch(addExpense({id,description,note,createdat,amount}));

//      props.history.push('/');
//     }}/>
//   </div>
// );
// export default connect()(AddExpensePage);

export class AddExpensePage extends React.Component{
  onSubmit=({id,description,note,createdat,amount})=>{

    this.props.onSubmit({id,description,note,createdat,amount});
    this.props.history.push('/');
  };
  render(){
    return(
      <div>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return {
    onSubmit:({id,description,note,createdat,amount})=>dispatch(startAddExpense({id,description,note,createdat,amount}))
  }
}
export default connect(undefined,mapDispatchtoProps)(AddExpensePage);
// we can use the following procedure to export function

// export default ()=>(
//   <div>
//     This is from AddExpensePage
//   </div>
// );
