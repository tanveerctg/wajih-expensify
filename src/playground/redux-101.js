import {createStore} from 'redux';

const store=createStore((state={count:0},action)=>{
  switch(action.type){
    case('INCREMENT'):{
      return{
        count:state.count+action.IncrementBy
      }
    }
    case('DECREMENT'):{
      return{
        count:state.count-action.DecrementBy
      }
    }
    case('RESET'):{
      return{
        count:0
      }
    }
  }
});
const Increment=({IncrementBy=1}={})=>({
  type:'INCREMENT',
  IncrementBy:IncrementBy
});

const Decrement=({DecrementBy=1}={})=>({
  type:'DECREMENT',
  DecrementBy:DecrementBy
});


store.subscribe(()=>{console.log(store.getState())});

store.dispatch(Increment());

store.dispatch(Increment({IncrementBy:5}));

store.dispatch(Decrement({DecrementBy:5}));

store.dispatch({
  type:'RESET'
});
