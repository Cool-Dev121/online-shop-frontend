import React from 'react';
import { Layout } from '../../components';
import { Toolbar, LinksList, LinkItemModel } from '../../shared';
import { LayoutProps } from '../Routes';

const links: LinkItemModel[] = [
  {
    id: 'orders',
    link: '/orders',
    title: 'Orders',
  },
  {
    id: 'products',
    link: '/products',
    title: 'Products',
  },
  {
    id: 'product-create',
    link: '/product',
    title: 'Product create (temp)',
  },
  {
    id: 'product-edit',
    link: '/product/5',
    title: 'Product 5 edit (temp)',
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
