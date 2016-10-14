import React from 'react';
import Item from './components/item'

const List = ({events, items, visible}) => (
  <ul className="media-list">
    {items.map((data) => <Item key={data.id} data={data} onRemove={events.onRemove} onToggle={events.onToggle} />)}
  </ul>
)

export default List;
