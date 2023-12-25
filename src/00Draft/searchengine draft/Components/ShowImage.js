import React from 'react';

const ShowImage =(props)=>{
    const img=props.images.map((x)=>{

         return <img key={x.id} src={x.webformatURL} alt="not"></img>

         
    })
    return(
        <div>{img}</div>
    )
}

export default ShowImage;