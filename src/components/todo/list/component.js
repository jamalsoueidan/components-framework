import React from 'react';
import { connect } from 'react-redux'
import Item from './components/item'
import {remove, toggle} from './actions'

class List extends React.Component {

  render() {
    let items = this.props.items;

    if ( this.props.visible === "completed"  ) {
      items = items.filter(e => e.completed === true)
    }

    return(
      <ul className="media-list">
        {items.map((data) => <Item key={data.id} data={data} onRemove={this.props.onRemove} onToggle={this.props.onToggle} />)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.list, visible: state.filterBy
})

const mapDispatchToProps = {
  onRemove: remove,
  onToggle: toggle
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
