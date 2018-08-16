import uuid from 'uuid';
import database from '../firebase/firebase';
//ADD EXPENSE
export const addExpense=(exp)=>({

  type:'ADD_EXPENSE',
  expense:exp
});
export const startAddExpense=(expenseData={})=>{
  return (dispatch)=>{
      const {description='',note='',createdat=0,amount=0}=expenseData;
      const expense={description,note,createdat,amount};

      database.ref('expenses').push(expense).then(ref=>{
        dispatch(addExpense({
          id:ref.key,
          ...expense
        }))
      })
  }
}

//REMOVE EXPENSE
export const remove=(item)=>({
  type:'REMOVE',
  id:item.id
})
export const startRemoveExpense=(item)=>{
  return (dispatch)=>{
      console.log(item.id);
      database.ref(`expenses/${item.id}`).remove().then(()=>{
        dispatch(remove(item));
      })
    
  }
}


//EDIT EXPENSE
export const editExpensePage=(id,update)=>({
  type:'EDIT_EXPENSE',
  id,
  update
})

export const startEditExpense=(id,update)=>{
  return (dispatch)=>{
    database.ref(`expenses/${id}`).update(update).then(()=>{
      dispatch(editExpensePage(id,update));
    })
  }
}


//SET EXPENSES
export const setExpense=(expenses)=>({
  type:'SET_EXPENSE',
  expenses:expenses 
});

export const startSetExpense=()=>{
  return (dispatch)=>{
    database.ref('expenses').
    once('value')
    .then((snapshot)=>{
      const allExpenses=[];
      snapshot.forEach(childSnapshot=>{
        allExpenses.push(
          {
            id:childSnapshot.key,
            ...childSnapshot.val()

          });
      })
      dispatch(setExpense(allExpenses))
    })
  
  }
}

    // database.ref().on('value',(snapshot)=>{
    //   const allExpenses=[];
    //   snapshot.forEach(childSnapshot=>{
    //     childSnapshot.forEach(x=>{
    //       allExpenses.push(
    //         {
    //           id:x.key,
    //           ...x.val()

    //         });
    //     });
    //     console.log(allExpenses);
    //   })
    // })
        // database.ref('expenses').
        // once('value')
        // .then((snapshot)=>{
        //   const allExpenses=[];
        //   snapshot.forEach(childSnapshot=>{
        //     allExpenses.push(
        //       {
        //         id:childSnapshot.key,
        //         ...childSnapshot.val()
  
        //       });
        //   })
        //   console.log(allExpenses);
        // })