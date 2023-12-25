// import React from 'react';

// const About=()=>{
//     return(
//         <div>
//             <h1>
//                 About Us
//             </h1>
//             <p>
//                 Hi this is an sample about page.
//             </p>
//         </div>
//     )
// }
// export default About;


//styling using semantic UI
import React from 'react';

const About=()=>{
    return(
        <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
            <h1>
                About Us
            </h1>
            <p>
                Hi this is an sample about page.
            </p>
        </div>
    )
}
export default About;