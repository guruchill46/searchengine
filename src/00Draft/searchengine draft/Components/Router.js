import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './App';
import About from './About';
import Contact from './Contact'

class App extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.onSearchSubmit=this.onSearchSubmit.bind(this)
    // }


// onSearchSubmit(entry){
//     console.log(entry)
// }

render(){
    return(<div>
        <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Home/>}/>  
            {/*or  <Route exact path='/home' element={<Home/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            </Routes>        
        </BrowserRouter>
        </div>
    )
}
}


export default App;