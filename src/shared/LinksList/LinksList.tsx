import React from 'react';
import { List } from '../../components';
import { LinkItem } from './LinkItem';
import { LinkItemModel } from './models';

interface Props {
  items: LinkItemModel[];
}

export const LinksList = (props: Props): JSX.Element => {
  const { items } = props;
  return <List renderItem={(item: LinkItemModel) => <LinkItem item={item} />} items={items} />;
};
