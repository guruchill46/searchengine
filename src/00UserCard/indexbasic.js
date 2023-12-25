//step-1 --importing library
import React from 'react';
import ReactDOM from 'react-dom';
import First from './App';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// //step2--Component->class/function
// const First=()=>{
//   //return(<div><h1>welcome to my website</h1></div>)

//   //return(<div><h1 style="background-color:red; color:white;">welcome to my website</h1></div>)
//   //return(<div><h1 style={{backgroundColor:'red',color:'white'}}>Welcome to my styling</h1></div>)
//   //as same as style we dont use class='c1'
//   //instead we use className='c1'--because the keyword class present in Class App extends React.component.

//   // //as variable
//   // var message="welcome to my var link"
//   // return(<div><h1 style={{backgroundColor:'red',color:'white'}}>{message}</h1></div>)
//   // //as function
//   // function myFun(){
//   //   return 'welcome to my function'}
//   //   return(<div><h1 style={{backgroundColor:'red',color:'white'}}>{myFun()}</h1></div>)
//   // //style
//   // const style1={backgroundColor:'red',color:'blue'}
//   // return(<div><h1 style={style1}>welcome to diff style</h1></div>)
//   //variable object
//   var message={text:"welcome",name:"guru"}
//   return(<div><h1>{message.name}</h1></div>)
// }
//step3--display Data
ReactDOM.render(
  <First />,
  document.querySelector("#root")
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
