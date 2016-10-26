import React from "react"
import { connect } from "react-redux"
import BEM from '../../core/bem'
import Menu from "../menu/component"

const b = BEM.with('KAF-block');

const ApplicationNavigation = ({items}) => (
  <div className={b({Application:true})}>
    <Menu items={items} />
  </div>
)

const mapStateToProps = (state) => ({
  items: state.applicationNavigation
})

export default connect(mapStateToProps)(ApplicationNavigation)
