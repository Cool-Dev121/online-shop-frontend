import React from 'react';
import { Layout } from '../../components';
import { Toolbar, LinksList, LinkItemModel } from '../../shared';
import { LayoutProps } from '../Routes';
import { CustomerRoutes } from './CustomerRoutes';

const links: LinkItemModel[] = [
  {
    id: 'orders',
    link: CustomerRoutes.Orders,
    title: 'Orders',
  },
  {
    id: 'products',
    link: CustomerRoutes.Products,
    title: 'Products',
  },
  {
    id: 'cart',
    link: CustomerRoutes.Cart,
    title: 'Cart',
  },
];

export const CustomerLayoutWrapper = (props: LayoutProps): JSX.Element => {
  const { component: Component } = props;
  return (
    <Layout
      renderToolbar={() => <Toolbar />}
      renderSidebar={() => <LinksList items={links} />}
      renderContent={() => <Component />}
    />
  );
};
