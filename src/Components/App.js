//import SearchInput and styling SearchInput
// import React from 'react';
// import SearchInput from './SearchInput';

// const App=()=>{
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput></SearchInput>
//     </div>)
// }

// export default App;


//Tamil Hacks method for on Submit
// import React from 'react';
// import SearchInput from './SearchInput';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//   }

//   onSearchSubmit(x){
//     console.log(x)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//     </div>)
// }}

// export default App;

//AJAX= Asynchronous Javascript And XML is not a programming language
//AJAX=Ajax is a set of web development techniques that uses various web technologies on the client-side to 
//create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server 
//asynchronously (in the background) without interfering with the display and behaviour of the existing page.

//Fetch -The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, 
//such as requests and responses. It also provides a global fetch() method that provides an easy, logical way 
//to fetch resources asynchronously across the network.--builtin function in all browser--more no of lines of 
//code difficult for beginners..

//So instead using fetch , we are going to use third party package(axios) now.
//Tamil Hacks Method for using axios and fetching
// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//   }

//   onSearchSubmit(x){
//     const response= Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     console.log(response)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//     </div>)
// }}

// export default App;



//in the above console.log executes at once before getting data from pixabay using axios-- so console output 
//is promise pending(invalid for us)
// to eliminate that we use Async and await to wait for data fetching done and execute console.log
// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//   }

//   async onSearchSubmit(x){
//     const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     //console.log(response)
//     console.log(response.data.hits)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//     </div>)
// }}

// export default App;


//to store data in state and [] used in state for getting array element(because the fetching data is in array) 
// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//     this.state={images: []}
//   }

//   async onSearchSubmit(x){
//     const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     //console.log(response)
//     this.setState({images: response.data.hits})
//     console.log(this.state.images.length)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//     </div>)
// }}

// export default App;



//we cant display image directly.because it stored in array.but we can display how many images we got.for that 
//we use .length
// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';
// import ImageList from './ImageList';
// import Navbar from './Navbar';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//     this.state={images: []}
//   }

//   async onSearchSubmit(x){
//     const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     console.log(response.data.hits)
//     this.setState({images: response.data.hits})
//     console.log(this.state.images.length)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//         <div>we currently have {this.state.images.length} images</div>
//     </div>)
// }}

// export default App;



//to show images and navigaton bar attachement

// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';
// import ImageList from './ImageList';
// import Navbar from './Navbar';
// import Router from './Router';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//     this.state={images: []}
//   }

//   async onSearchSubmit(x){
//     const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     console.log(response.data.hits)
//     this.setState({images: response.data.hits})
//     console.log(this.state.images.length)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
        
//         <Navbar></Navbar>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//         <div>we currently have {this.state.images.length} images</div>
//         <ImageList photos={this.state.images}></ImageList>
//     </div>)
// }}

// export default App;


//nav bar moved to router to reflect in every page and now app will act as home page
// import React from 'react';
// import SearchInput from './SearchInput';
// import Axios from 'axios';
// import ImageList from './ImageList';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.onSearchSubmit=this.onSearchSubmit.bind(this)//not necessary
//     this.state={images: []}
//   }

//   async onSearchSubmit(x){
//     const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${x}&image_type=photo&pretty=true`)
//     console.log(response.data.hits)
//     this.setState({images: response.data.hits})
//     console.log(this.state.images.length)
//   }
  
//     render(){
//     return(<div className='ui container' style={{marginTop:'30px'}}>
//         <SearchInput onSearch={this.onSearchSubmit}></SearchInput>
//         <div>we currently have {this.state.images.length} images</div>
//         <ImageList photos={this.state.images}></ImageList>
//     </div>)
// }}

// export default App;


//My method

import React from 'react';
import SearchInput from './SearchInput';

class App extends React.Component{
  
    render(){
    return(<div className='ui container' style={{marginTop:'30px'}}>
        <SearchInput></SearchInput>
        

    </div>)
}}

export default App;