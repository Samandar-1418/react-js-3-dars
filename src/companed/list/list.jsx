import React from 'react'
import './list.css'
export default function List(props) {
    const {text } = props.data
  return (
    <div className='List'>
        <p>{text}</p>
        <div className="edit">
            <button className="btn">EDIT</button>
            <button className="btn">DELETE</button>
        </div>
    </div>
  )
}
