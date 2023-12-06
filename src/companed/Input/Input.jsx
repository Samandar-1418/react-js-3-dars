import React from 'react'
import './input.css'
export default function Input(props) {
    const {info}= props.data
  return (
    <input type="text" placeholder={info} onInput={props.onInput} />
  )
}
