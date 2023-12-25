// import React from 'react';
// import ReactDOM from 'react-dom';
// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=>console.log(position),
//     (error)=> console.log(error) 
//   );
//   return(
//     <div> Hi</div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )



//using Class because function not capable to display result after getting location

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//   render(){
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>console.log(position),
//       (error)=>console.log(error)
//     )
//     return(
//       <div>hi  </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )


// //based on constructor to display result
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={lat: "permission denied"}

//   }
//   render(){
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>this.setState({lat: position.coords.latitude}),
//        (error)=>console.log(error)
//     )
//     return(
//       <div>{this.state.lat}</div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )


//based on constructor-position syntax can be written in constructor itself
//add error display
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={lat: null, err:''}
    
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>this.setState({lat: position.coords.latitude}),
//        (error)=>{this.setState({err: error.message})}
//     )

//   }
//   render(){
//     return(
//       <div>{this.state.lat}
//       {this.state.err}</div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )



// //condition based rendering
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={lat: null, err:''}
    
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>this.setState({lat: position.coords.latitude}),
//        (error)=>{this.setState({err: error.message})}
//     )

//   }
//   render(){
//       if(this.state.lat && !this.state.err){
//         return(<div>Your current latitude is {this.state.lat}</div>)
//       }
//       if(!this.state.lat && this.state.err){
//         return(<div>Error: {this.state.err}</div>)
//       }
//       else{
//         return(<div>Location Permission Required</div>)
//       }
  
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )



//to display North or south- create another js file with function  
//condition based rendering
import React from 'react';
import ReactDOM from 'react-dom';
import LocD from './LD';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={lat: null, err:''}
    
    window.navigator.geolocation.getCurrentPosition(
      (position)=>this.setState({lat: position.coords.latitude}),
       (error)=>{this.setState({err: error.message})}
    )

  }
  render(){
      if(this.state.lat && !this.state.err){
        return(<div><LocD lat={this.state.lat}/></div>)
      }
      if(!this.state.lat && this.state.err){
        return(<div>Error: {this.state.err}</div>)
      }
      else{
        return(<div>Location Permission Required</div>)
      }
  
  }
}

ReactDOM.render(
 <App />,
  document.querySelector('#root')
  )