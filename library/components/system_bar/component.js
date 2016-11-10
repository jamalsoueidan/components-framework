import React, {Component} from "react"
import MenuItem from "../menu_item/component"
import BEM from '../../core/bem'

const b = BEM.with('KAF-block');

class SystemBar extends Component {
  render() {
    return (
      <div className={b({SystemBar:true})}>
        <MenuItem bem="KAF-AppHome" title="Title">
          <MenuItem className="KAF-Image KAF-Image--icon" title="KAF-Image--icon title">
            content
          </MenuItem>
        </MenuItem>
      </div>
    )
  }
}

export default SystemBar;
