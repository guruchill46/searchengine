import React from 'react';
import SearchInput from './SearchInput';
import Navbar from './Nb'

class App extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.onSearchSubmit=this.onSearchSubmit.bind(this)
    // }


// onSearchSubmit(entry){
//     console.log(entry)
// }

render(){
    return(<div><Navbar></Navbar>
        <div className='ui container'style={{marginTop:'30px'}}>
            {/* <SearchInput onSearchSubmit={this.onSearchSubmit}/> */}
            <SearchInput/>
        </div>
        </div>
    )
}
}


export default App;