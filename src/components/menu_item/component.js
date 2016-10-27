import "./style.scss"

import React from "react"
import BEM from '../../core/bem'

const b = BEM.with("KAF-MenuItem")

export default ({data}) => (
  <dl className={b()}>
    <dt className={b("title")}>{data.name}</dt>
    <dd className={b("content")}>
      <a href="#">{data.name}</a>
    </dd>
  </dl>
)
