  import moment from 'moment';

  export default (exp,{text='',startDate,endDate,sortBy})=>{

    let hold=exp.filter(expense=>{
    
      const txtMatch =expense.description.toLowerCase().includes(text.toLowerCase());
      const startingDate = startDate ? expense.createdat>= moment(startDate).valueOf() : true;
      const endingDate = endDate ? expense.createdat <= moment(endDate).valueOf() : true;
   
    if(txtMatch && startingDate && endingDate){
      return expense;
    }
    });
  
    if(sortBy==='amount'){
  
      hold=hold.sort((a,b)=>(a.amount<b.amount?1:-1))
    }else if(sortBy==='date'){
      
      hold=hold.sort((a,b)=>(a.createdat<b.createdat?1:-1))
    }
    let sum=0;
    const totalExpense=hold.forEach(item=>{
      sum=parseInt(item.amount)+sum;
    })

    return { hold:hold,
             totalExpense:sum
           };
  
   
  }
