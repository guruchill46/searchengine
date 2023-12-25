import React from 'react';
import SearchInput from './SearchInput';
import Navbar from './Nb'

const home=()=>{
    return (<div>
        <Navbar></Navbar>
        <div className='ui container'style={{marginTop:'30px'}}>
    {/* <SearchInput onSearchSubmit={this.onSearchSubmit}/> */}
    <SearchInput/>
</div>
    </div>
    )
}
export default home;