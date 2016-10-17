import React from "react"

const Item = ({data, onRemove, onToggle}) => (
  <li style={(data.completed ? { textDecoration: "line-through" } : {})}>
    {data.text} -
    <button onClick={()=>onRemove(data.id)}>Remove</button>
    <button onClick={()=>onToggle(data.id)}>Toggle</button>
  </li>
)

export default Item
