import React from 'react';
import { connect } from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';

export const publicRoute=({component:Component,isAuthenticated,...rest})=>(

    <Route 
      {...rest} 
      component={(props)=>(
        isAuthenticated ? 
          <Redirect to="/dashboard" />
        : (
            <Component {...props}/> 
          )
      )}
    />
)
const mapStateToProps=(state)=>{
  return {
    isAuthenticated:!!state.authReducer.id
  }
}
export default connect(mapStateToProps)(publicRoute);
