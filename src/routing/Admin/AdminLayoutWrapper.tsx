import React from 'react';
import { Layout } from '../../components';
import { Toolbar, LinksList, LinkItemModel } from '../../shared';
import { LayoutProps } from '../Routes';
import { AdminRoutes } from './AdminRoutes';

const links: LinkItemModel[] = [
  {
    id: 'orders',
    link: AdminRoutes.Orders,
    title: 'Orders',
  },
  {
    id: 'products',
    link: AdminRoutes.Products,
    title: 'Products',
  },
  {
    id: 'product-create',
    link: AdminRoutes.Product,
    title: 'Product create (temp)',
  },
];

export const AdminLayoutWrapper = (props: LayoutProps): JSX.Element => {
  const { component: Component } = props;
  return (
    <Layout
      renderToolbar={() => <Toolbar />}
      renderSidebar={() => <LinksList items={links} />}
      renderContent={() => <Component />}
    />
  );
};
