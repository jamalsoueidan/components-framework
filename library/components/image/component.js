import React from "react"
import BEM from '../../core/bem'

const b = BEM.with("KAF-Image")

export default ({data}) => (
  <dl className={b({Icon:true})}>
    <dt className={b("title")}>{data.name}</dt>
    <dd className={b("content")}>
      <a href="#">{data.name}</a>
    </dd>
  </dl>
)
