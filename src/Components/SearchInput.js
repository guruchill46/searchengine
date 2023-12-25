//form creation
// import React from 'react';

// class SearchInput extends React.Component{

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form'>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;


// //using onChange event handler and uncontrolled Component
// import React from 'react';

// class SearchInput extends React.Component{

//     onType(x){
//         console.log(x.target.value)
//     }

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form'>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'
//                         onChange={this.onType}>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;



//putting onType function inside onChange
// import React from 'react';

// class SearchInput extends React.Component{

     

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form'>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'
//                         onChange={(x)=>console.log(x.target.value)}>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;
//-controlled Component-- A controlled component is one that takes its current value through props and notifies 
//changes through callbacks like onChange

//-uncontrolled Component-- A uncontrolled component is one that stores its own state internally and you query 
//the DOM using a ref to find its current value when you need it. it is old traditiona HTML move. 



//to change the component to controlled Component
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//     }

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form'>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'
//                         onChange={(x)=>{this.setState({entry: x.target.value})
//                         //for LowerCase onChange={(x)=>{this.setState({entry: x.target.value.toLowerCase.value})
//                         console.log(this.state.entry)}}>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;


// to get the value on Submit onSubmit callback used
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//     }
//     onFormSubmit=(x)=>{
//         x.preventDefault();
//         console.log(this.state.entry)
//     }

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form' onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'
//                         onChange={(x)=>{this.setState({entry: x.target.value})
//                         //for LowerCase onChange={(x)=>{this.setState({entry: x.target.value.toLowerCase.value})
//                         console.log(this.state.entry)}}>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;


//Tamil Hacks Method 
//on Submit
// import React from 'react';

// class SearchInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={entry : ''}
//     }
//     onFormSubmit=(x)=>{
//         x.preventDefault();
//         this.props.onSearch(this.state.entry)
//     }

//     render(){
//         return(
//             <div>
//                 <div className='ui segment'>
//                     <form action='' className='ui form' onSubmit={this.onFormSubmit}>
//                         <div className='field'>
//                             <div className='ui massive icon input'>
//                         <input type='text' placeholder='Type here to search'
//                         onChange={(x)=>{this.setState({entry: x.target.value})
//                         //for LowerCase onChange={(x)=>{this.setState({entry: x.target.value.toLowerCase.value})
//                         //console.log(this.state.entry)
//                     }}
//                         value={this.state.entry}>
//                         </input>
//                         <i className='search icon'></i></div></div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SearchInput;




//AJAX= Asynchronous Javascript And XML is not a programming language
//AJAX=Ajax is a set of web development techniques that uses various web technologies on the client-side to 
//create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server 
//asynchronously (in the background) without interfering with the display and behaviour of the existing page.

//Fetch -The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, 
//such as requests and responses. It also provides a global fetch() method that provides an easy, logical way 
//to fetch resources asynchronously across the network.--builtin function in all browser--more no of lines of 
//code difficult for beginners..

//So instead using fetch , we are going to use third party package(axios) now.

//My method

import React from 'react';
import Axios from 'axios';
import ImageList from './ImageList';

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={entry : '',images:[]}
    }
    onFormSubmit=async (x)=>{
        x.preventDefault();
        const response=await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
        //console.log(this.state.entry)
        this.setState({images: response.data.hits})
    console.log(this.state.images.length)
    }

    render(){
        return(
            <div>
                <div className='ui segment'>
                    <form action='' className='ui form' onSubmit={this.onFormSubmit}>
                        <div className='field'>
                            <div className='ui massive icon input'>
                        <input type='text' placeholder='Type here to search'
                        onChange={(x)=>{this.setState({entry: x.target.value})
                        //for LowerCase onChange={(x)=>{this.setState({entry: x.target.value.toLowerCase.value})
                        console.log(this.state.entry)}}
                        value={this.state.entry}>
                        </input>
                        <i className='search icon'></i></div></div>
                    </form>
                </div>
                <div>we currently have {this.state.images.length} images</div>
                <ImageList photos={this.state.images}></ImageList>
            </div>
        )
    }
}
export default SearchInput;

