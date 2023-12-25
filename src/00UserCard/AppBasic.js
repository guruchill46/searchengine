//step2--Component->class/function
const First=()=>{
  //return(<div><h1>welcome to my website</h1></div>)

  //return(<div><h1 style="background-color:red; color:white;">welcome to my website</h1></div>)
  //return(<div><h1 style={{backgroundColor:'red',color:'white'}}>Welcome to my styling</h1></div>)
  //as same as style we dont use class='c1'
  //instead we use className='c1'--because the keyword class present in Class App extends React.component.

  // //as variable
  // var message="welcome to my var link"
  // return(<div><h1 style={{backgroundColor:'red',color:'white'}}>{message}</h1></div>)
  // //as function
  // function myFun(){
  //   return 'welcome to my function'}
  //   return(<div><h1 style={{backgroundColor:'red',color:'white'}}>{myFun()}</h1></div>)
  // //style
  // const style1={backgroundColor:'red',color:'blue'}
  // return(<div><h1 style={style1}>welcome to diff style</h1></div>)
  //variable object
  var message={text:"welcome",name:"guru"}
  return(<div><h1>{message.name}</h1></div>)
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default First;
