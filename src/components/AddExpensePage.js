import React from 'react';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../Actions/expenses';
import { connect } from 'react-redux';
import {startLogout} from '../Actions/auth';
import { Link } from 'react-router-dom';
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
       <div className="Header__1st"> 
          <div className="Header__1st__inner"> 
            <Link to={`/dashboard`} className="link__style link__style__mainPage">
              <h1>Expensify</h1>
            </Link>
            <button onClick={this.props.startLogout} className="Header__btn">Logout</button>
          </div>
        </div>
        <div className="Header__2nd">
          <div className="Header__2nd__inner">
            <h1>Add Expense</h1>
          </div>
        </div>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchtoProps=(dispatch)=>{
  return {
    onSubmit:({id,description,note,createdat,amount})=>dispatch(startAddExpense({id,description,note,createdat,amount})),
    startLogout:()=>dispatch(startLogout())
  }
}
export default connect(undefined,mapDispatchtoProps)(AddExpensePage);
// we can use the following procedure to export function

// export default ()=>(
//   <div>
//     This is from AddExpensePage
//   </div>
// );
