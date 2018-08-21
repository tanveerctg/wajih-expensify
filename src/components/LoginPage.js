import React from 'react';
import {startLogin} from '../Actions/auth';
import { connect } from 'react-redux';

export const LoginPage=(props)=>(
  <div className="login">
    <div className="login__inner">
      <h1>Budget App</h1>
      <p><span>It's time to get your expenses</span><span>under control.</span></p>
      <button onClick={props.startLogin} className="login__btn">Login with Google</button>
    </div>
  </div>
);

const mapDispatchtoProps=(dispatch)=>{
  return {
    startLogin:()=>dispatch(startLogin())
  }
}
export default connect(undefined,mapDispatchtoProps)(LoginPage);