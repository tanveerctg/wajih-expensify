import React from 'react';
import { connect } from 'react-redux';
import {set_By_Text} from '../Actions/filters';
import {sortBy_amount} from '../Actions/filters';
import {sortBy_date} from '../Actions/filters';
import {set_By_startDate} from '../Actions/filters';
import {set_By_endDate} from '../Actions/filters';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid'

class ExpenseListFilter extends React.Component{

  state={
    calendarFocused:null
  }
  onDatesChange=({ startDate, endDate })=>{
    
    this.props.dispatch(set_By_startDate(startDate));
    this.props.dispatch(set_By_endDate(endDate))
  };
  onFocusChange=(calendarFocused)=>{
    this.setState(()=>({
      calendarFocused
    }))
  }
  render(){
   
    return(
      <div>
          <input type="text" onChange={(e)=>{
            this.props.dispatch(set_By_Text(e.target.value));
          }}/>
          <select onChange={(e)=>{
            if(e.target.value==='amount'){
              this.props.dispatch(sortBy_amount(e.target.value));
            }else if(e.target.value==='date'){
              this.props.dispatch(sortBy_date(e.target.value));
            }
          }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filter.startDate} 
            startDateId={uuid()}
            endDate={this.props.filter.endDate} 
            endDateId={uuid()}
            onDatesChange={this.onDatesChange} 
            focusedInput={this.state.calendarFocused} 
            onFocusChange={this.onFocusChange} 
            numberOfMonths={1}
            isOutsideRange={()=>false}
            showClearDates={true}
          />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      filter:state.filterReducer
    }
  }
)(ExpenseListFilter);
