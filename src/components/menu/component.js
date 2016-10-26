import React from "react"
import MenuItem from "../menu_item/component"
import BEM from '../../core/bem'

const b = BEM.with("KAF-Menu")

export default ({items}) => (
  <dl className={b()}>
    <dt className={b("title")}>Leftmenu</dt>
    <dd className={b("content")}>
      {items.map(item => <MenuItem key={item.link} data={item} />)}
    </dd>
  </dl>
)
