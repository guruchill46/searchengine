//components--nesting,reusability,configuration
//Comment App
// import React from 'react';
// import ReactDOM from 'react-dom';
// import C from './Comment'
// import pic1 from "./images/one.jpg";
// import pic2 from "./images/two.jpg";
// import pic3 from "./images/three.jpg";


// const First=()=>{// nesting // reusability
//     return(<div className="ui comments">
//         <C name='Raj' time='3pm' pic={pic1} mes="Good Luck" />
//         <C name='Alia' time='3pm' pic={pic2} mes="Congrats" />
//         <C name='Remo' time='3pm' pic={pic3} mes="All the best" />
//     </div>

// )

// }

// ReactDOM.render(
//     <First/>,
//     document.querySelector("#root")
// )


//user card
import React from 'react';
import ReactDOM from 'react-dom';
import C from './Comment'
import pic1 from "./images/one.jpg";
import pic2 from "./images/two.jpg";
import pic3 from "./images/three.jpg";
import UserCard from "./Usercard";

const First=()=>{
    return(
    <div className="ui comments">
        <UserCard>
        <C name='Raj' time='3pm' pic={pic1} mes="Good Luck" /></UserCard>
        <UserCard><C name='Alia' time='3pm' pic={pic2} mes="Congrats" /></UserCard>
        <UserCard><C name='Remo' time='3pm' pic={pic3} mes="All the best" /></UserCard>
    </div>

)

}

ReactDOM.render(
    <First/>,
    document.querySelector("#root")
)