import React from 'react';
import './styles.scss';

interface Item {
  id: string | number;
}

interface Props<TItem extends Item> {
  items: TItem[];
  renderItem: (item: TItem, index: number) => JSX.Element;
}

function List<TItem extends Item>(props: Props<TItem>): JSX.Element {
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
