import React from "react"
import BEM from '../../core/bem'

const b = BEM.with("KAF-MenuItem")

export default (props) => (
  <dl className={b()}>
    <dt className={b("title")}>{props.name}</dt>
    <dd className={b("content")}>
      <a href="#">Falkevej</a>
    </dd>
  </dl>
)
