import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBGQ6NIndOIg7clHuRj_AVbkPWm8SzxiGM",
  authDomain: "wajih-ee001.firebaseapp.com",
  databaseURL: "https://wajih-ee001.firebaseio.com",
  projectId: "wajih-ee001",
  storageBucket: "wajih-ee001.appspot.com",
  messagingSenderId: "159938377144"
};
firebase.initializeApp(config);

const database=firebase.database();

export {firebase,database as default};

// database.ref().set({
//   name:'wajih',
//   age:11,
//   born:'Brisbane,Australia',
//   parents:{
//     mom:'X',
//     dady:'Y'
//   },
//   address:'chandgaon,ctg'
// }).catch((e)=>{
//   console.log('Error: Somethingwent wrong', e);
// });

//SET VALUE TO DATABASE
  // database.ref('parents/mom').set('K');
  // database.ref('origin').set('Chandpur');

//UPDATE DATABASE
  // database.ref().update({
  //   name:'tanveer'
  // })

//FETCHING data from database
//  database.ref().on('value',(snapshot)=>{
//    console.log(snapshot.val());
//  })
