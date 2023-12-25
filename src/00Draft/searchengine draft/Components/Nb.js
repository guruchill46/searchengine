import React from 'react';

const Navbar=()=>{
        return(
            <div>
                <nav className='ui raised very padded segment'>
                    <h1 className ='ui teal inverted segment'>Image Search Enigne</h1>
                    <div className='ui right floated header'>
                        <button className='ui button'><a href="/">Home</a></button>
                        <button className='ui button'><a href="/about">About Us</a></button>
                        <button className='ui button'><a href="/contact">Contact Us</a></button>
                    </div>
                </nav>
            </div>
        )
    }

export default Navbar;