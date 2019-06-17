import React from 'react';
import { List } from '../../components';
import { LinkItem } from './LinkItem';
import { LinkItemModel } from './models';

interface Props {
  items: LinkItemModel[];
}

export const LinksList = (props: Props): JSX.Element => {
  const { items } = props;
  return (
    <List
      renderItem={(item: LinkItemModel, index: number) => (
        <div
          style={{
            marginBottom: index === items.length - 1 ? 0 : '5px',
          }}
        >
          <LinkItem item={item} />
        </div>
      )}
      items={items}
    />
  );
};
