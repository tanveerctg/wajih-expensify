import React from 'react';
import moment from 'moment';
import {  SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
import uuid from 'uuid'

export class ExpenseForm extends React.Component{

  state={
    description:this.props.expense?this.props.expense.description:'',
    amount:this.props.expense?this.props.expense.amount:'',
    note:this.props.expense?this.props.expense.note:'',
    createdat:this.props.expense?moment(this.props.expense.createdat):moment(),
    focused:false,
    error:false
  }
  onDescriptionChange=(e)=>{
    const description=e.target.value;
    this.setState(()=>({
      description:description
    }))
  }
  onAmountChange=(e)=>{
    const amount=e.target.value;
    this.setState(()=>({
      amount:amount
    }))
  }
  onNoteChange=(e)=>{
    const note=e.target.value;
    this.setState(()=>({
      note
    }))
  }
  onDateChange=(createdat)=>{
    this.setState(()=>({createdat:createdat}))
  };
  onFocusChange=({ focused }) =>{
    this.setState({ focused })
    
  } ;
  handleSubmit=(e)=>{
    if(this.state.description==='' || this.state.amount ===''){
      this.setState(()=>({
        error:true
      }))
    }else{
      this.setState(()=>({
        error:false
      }))
      this.props.onSubmit({
        id:uuid(),
        description:this.state.description,
        note:this.state.note,
        amount:this.state.amount,
        createdat:this.state.createdat.valueOf()
      });
    }
    e.preventDefault();
  }
  render(){

    return(
       <div>         
          <form onSubmit={this.handleSubmit}>
            <input 
              placeholder="Description"
              type="text"
              onChange={this.onDescriptionChange}
              value={this.state.description}
            />
            <input 
              placeholder="Amount"
              type="number"
              onChange={this.onAmountChange}
              value={this.state.amount}
            />
            <textarea 
              placeholder="Add some info (Optional)"
              type="text"
              onChange={this.onNoteChange}
              value={this.state.note}
            />
             <input type="submit" value="Submit"/>
            <SingleDatePicker
              date={this.state.createdat}
              onDateChange={this.onDateChange}
              focused={this.state.focused}
              onFocusChange={this.onFocusChange} 
              showClearDate={this.setState.showClearDate}
              numberOfMonths={1}
              isOutsideRange={()=>false}
            />
           
          </form>
          
          {this.state.error && <p>Please fill up Description and Amount fields</p>}
      </div>
    )
  }
};
export default connect()(ExpenseForm);