// write the book component code here
import React from 'react'


function Bookcard({image,author,genre,name}) {
  return (
    <div>
        <br/>
        <br/>
        <img src={image} alt="" />
        <br/>
        name = {name} 
        <br/>
        <br/>
        author = {author}
        <br/>
        <br/>
        genre = {genre} 
    </div>
  )
}

export default Bookcard
