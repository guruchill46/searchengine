//To Display image data as image in web app, map function is used.
//map function used because image is in array
import React from 'react';

const ImageList=(props)=>{
    const im=props.photos.map((x)=>{
        return(<img key={x.id} src={x.webformatURL} alt="not available"></img>)
    })
    return(
        <div>{im}</div>
    )
}

export default ImageList;