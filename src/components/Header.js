import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../Actions/auth';
import { connect } from 'react-redux';
import getFilterExpense from '../getFilterExpense/getFilterExpense';
import { Link } from 'react-router-dom';
class Header extends React.Component{

  converter=(number)=>{
    if(number.toString().length>3){
      const toString=number.toString();
      const digits=[...toString];
      const thousand=digits.length-3;
      let lakh;
      let newDigits=[];
      if(number.toString().length>5){
        lakh=digits.length-5;
      }
      for(let i=0;i<digits.length;i++){
        if(i===thousand){
          newDigits.push(',');
          newDigits.push(digits[i]);
        }else if(i===lakh){
          newDigits.push(',');
          newDigits.push(digits[i]);
        }
        else{
          newDigits.push(digits[i]);
        }
      }

    const finalOutput=newDigits.map(item=>item).join('');
    return (`${finalOutput}`);
    }else{
      return number;
    }
    
  }
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
            {this.props.expense.length===0?<h1 className="red">No expenses available</h1>: <h1 className="red">Viewing {this.props.expense.length} expense totalling {this.converter(this.props.totalExpense)} tk</h1>}
            <NavLink to="/create" activeClassName="selected"><button className="Header__2nd__btn">Create Expense</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchtoProps=(dispatch)=>{
  return {
    startLogout:()=>dispatch(startLogout())
  }
}
const mapStatetoProps=(state)=>{
  return {
    expense:getFilterExpense(state.expenseReducer,state.filterReducer).hold,
    totalExpense:getFilterExpense(state.expenseReducer,state.filterReducer).totalExpense
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Header);