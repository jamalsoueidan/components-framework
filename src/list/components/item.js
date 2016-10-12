import React, { Component } from 'react'

const Item = ({data, onRemove, onToggle}) => {
  let myStyle = {};
  if (data.completed) {
    myStyle = {textDecoration:' line-through'};
  }
  return (
    <li style={myStyle}>
      {data.text} -
      <button onClick={(e) => {
        e.preventDefault()
        onRemove(data.id)
      }}>Remove</button>

      <button onClick={(e) => {
        e.preventDefault()
        onToggle(data.id)
      }}>Toggle</button>
    </li>
  )
}

export default Item
