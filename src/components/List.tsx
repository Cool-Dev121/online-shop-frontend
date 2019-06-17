import React, { Fragment } from 'react';

interface Item {
  id: string | number;
}

interface Props<TItem extends Item> {
  items: TItem[];
  renderItem: (item: TItem) => JSX.Element;
}

function List<TItem extends Item>(props: Props<TItem>): JSX.Element {
  const { items, renderItem } = props;
  return (
    <div>
      {items.map(item => (
        <Fragment key={item.id}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
}

export { List };
