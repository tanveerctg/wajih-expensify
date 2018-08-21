import React from 'react';
import { connect } from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';

export const privateRoute=({component:Component,isAuthenticated,...rest})=>(

    <Route 
      {...rest} 
      component={(props)=>(
        isAuthenticated ? 
          <div>
            <Component {...props}/> 
          </div>
        : <Redirect to="/" />
      )}
    />
)
const mapStateToProps=(state)=>{
  return {
    isAuthenticated:!!state.authReducer.id
  }
}
export default connect(mapStateToProps)(privateRoute);