import React from "react"

const Item = ({data, remove, toggle}) => (
  <li style={(data.completed ? { textDecoration: "line-through" } : {})}>
    {data.text} -
    <button onClick={()=>remove(data.id)}>Remove</button>
    <button onClick={()=>toggle(data.id)}>Toggle</button>
  </li>
)

const List = ({items, remove, toggle}) => (
  <ul className="todos">
    { items.map((data) => {
      return(<Item key={data.id} data={data} remove={remove} toggle={toggle} />)
    })}
  </ul>
)

export default List
