import React from "react"
import BEM from '../../core/bem'

const b = BEM.with("KAF-MenuItem")

require("./style.scss")

export default ({children, data}) => {

  if (data===undefined) data = {name: "Jamal"}

  return (
    <dl className={b()}>
      <dt className={b("title")}>{data.name}</dt>
      <dd className={b("content")}>
        {children}
      </dd>
    </dl>
)}
