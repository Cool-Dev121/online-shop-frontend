import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkItemModel } from './models';
import { Button } from '../../components';

interface Props {
  item: LinkItemModel;
}

export const LinkItemInner = (props: Props & RouteComponentProps) => {
  const { item, history } = props;

  return (
    <Button
      onClick={() => history.push(item.link)}
      isActive={history.location.pathname === item.link}
    >
      {item.title}
    </Button>
  );
};

export const LinkItem = withRouter(LinkItemInner);
