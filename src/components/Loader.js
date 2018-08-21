import React from 'react';

 class Loader extends React.Component{
   render(){
     return(
      <div className="loading">
        <p>loading<span className="load-1">.</span><span className="load-2">.</span><span className="load-3">.</span></p>
      </div>
     )
   }
 }
export default Loader;