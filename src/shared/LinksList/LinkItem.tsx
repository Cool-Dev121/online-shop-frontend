import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LinkItemModel } from './models';

interface Props {
  item: LinkItemModel;
}

export const LinkItem = (props: Props) => {
  const { item } = props;
  return (
    <Fragment>
      <Link to={item.link}>{item.title}</Link>
    </Fragment>
  );
};
