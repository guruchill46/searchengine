// import React from 'react'

// const LocD=(props)=>{
//     return(
//         <div>{props.lat}</div>
//     )
// }

// export default LocD;



//or because react knows value passed in LocD is props only

// import React from 'react'

// const LocD=({lat})=>{
//     return(
//         <div>{lat}</div>
//     )
// }

// export default LocD;



//ternary operator
// import React from 'react'
// const LocD=({lat})=>{
//     var region=lat>0?'Northern':'Southern'
//     return(
//         <div>you are in {region} Hemisphere</div>
//     )
// }

// export default LocD;


//to insert image
// import React from 'react'
// import No from './images/N.jpg'
// import So from './images/S.jpg'
// const LocD=({lat})=>{
//     var region=lat>0?'Northern':'Southern'
//     var pic=lat>0?No:So
//     return(
//         <div>you are in {region} Hemisphere
//         <img src={pic} alt="pic not available"/>
//         </div>
//     )
// }

// export default LocD;



//for big projects above can be written in config using objects. and whenever we have change a property we can edit only in config
// import React from 'react'
// import No from './images/N.jpg'
// import So from './images/S.jpg'
// const LocConfig={
//     Northern:{
//         tex: "You are in Northern Hemisphere",
//         pic:No
//         },
//     Southern:{
//         tex: "you are in Southern Hemisphere",
//         pic:So
//     }    
// }
// const LocD=({lat})=>{
//     var region=lat>0?'Northern':'Southern';
//     const {tex,pic}=LocConfig[region];
//     return(
//         <div>{tex} and your latitude is {lat}
//         <img src={pic} alt="pic not available"/>
//         </div>
//     )
// }

// export default LocD;



//for styling
// import React from 'react'
// import No from './images/N.jpg'
// import So from './images/S.jpg';
// import './LD.css';
// const LocConfig={
//     Northern:{
//         tex: "You are in Northern Hemisphere",
//         pic:No
//         },
//     Southern:{
//         tex: "you are in Southern Hemisphere",
//         pic:So
//     }    
// }
// const LocD=({lat})=>{
//     var region=lat>0?'Northern':'Southern';
//     const {tex,pic}=LocConfig[region];
//     return(
//         <div className={region}>{tex} and your latitude is {lat}
//         <img src={pic} alt="pic not available"/>
//         </div>
//     )
// }

// export default LocD;



//for more improvement using syementic UI
import React from 'react'
import No from './images/N.jpg'
import So from './images/S.jpg';
import './LD.css';
const LocConfig={
    Northern:{
        tex: "You are in Northern Hemisphere",
        pic:No
        },
    Southern:{
        tex: "you are in Southern Hemisphere",
        pic:So
    }    
}
const LocD=({lat})=>{
    var region=lat>0?'Northern':'Southern';
    const {tex,pic}=LocConfig[region];
    return(
        <div className={region}><div className='ui raised text container segment'>
            <div className='ui teal bottom attached label'>{tex} and your latitude is {lat}</div>
        <div className='image'><img src={pic} alt="pic not available"/></div></div>
        </div>
    )
}

export default LocD;