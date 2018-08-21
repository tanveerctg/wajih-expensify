import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import getFilterExpense from '../getFilterExpense/getFilterExpense';

// const ExpenseListItem=({id,description,createdat,amount})=>(

//    <Link to={`edit/${id}`} className="link__style">
//     <div className="expenseListItem">
//       <div className="expenseListItem__1st">
//         <h3>{description}</h3>
//         <p>{moment(createdat).format('LL')}</p>
//       </div>
//       <div className="expenseListItem__2nd">
//         <p>{converter(amount)} tk</p>
//         <br/>
//       </div>
//     </div>
//    </Link>
// );

// export default ExpenseListItem;

class ExpenseListItem extends React.Component{
  converter=(number)=>{

    if(number.length>3){
      const toString=number.toString();
      const digits=[...toString];
      const thousand=digits.length-3;
      let lakh;
      let newDigits=[];
      if(number.length>5){
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
      <Link to={`edit/${this.props.id}`} className="link__style">
    <div className="expenseListItem">
      <div className="expenseListItem__1st">
        <h3>{this.props.description}</h3>
        <p>{moment(this.props.createdat).format('LL')}</p>
      </div>
      <div className="expenseListItem__2nd">
        <p>{this.converter(this.props.amount)} tk</p>
        <br/>
      </div>
    </div>
   </Link>
    )
  }
}

export default ExpenseListItem;