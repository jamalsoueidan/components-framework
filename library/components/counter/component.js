import React from "react"

const style = {
  border: "1px red solid",
  padding: "10px"
}

const Counter = () => (
  <div style={style}>
    <input type="field" defaultValue="2" />
    <button>-</button>
    <button>+</button>
  </div>
)

export default Counter
