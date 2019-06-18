import React from 'react';
import './styles.scss';
import { Identifiable } from '../shared';

interface Props<TItem extends Identifiable> {
  items: TItem[];
  renderItem: (item: TItem, index: number) => JSX.Element;
}

function List<TItem extends Identifiable>(props: Props<TItem>): JSX.Element {
  const { items, renderItem } = props;
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div className="list-item-container" key={item.id}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

export { List };
