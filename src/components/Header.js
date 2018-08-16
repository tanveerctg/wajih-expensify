import React from 'react';
import { NavLink } from 'react-router-dom';
const Header=()=>{
  return(
    <div>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="selected" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="selected">Help</NavLink>
    </div>
  )

}
export default Header;