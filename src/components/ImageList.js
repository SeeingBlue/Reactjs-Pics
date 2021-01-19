import React from 'react'

const ImageList=(props)=>{
    const images = props.images.map(({description, alt_description, id, urls}) => {
        return <img alt={description == null ? alt_description : description} key={id} src={urls.regular}></img>
    })
    return <div>{images}</div>

}

export default ImageList