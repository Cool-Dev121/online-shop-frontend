import React, { ComponentType } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import { RouteWithLayout } from './RouteWithLayout';
import { Layout } from '../components';
import { Toolbar, LinksList, LinkItemModel } from '../shared';

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

export type Props = { component: ComponentType<any> };

const AdminLayout = (props: Props): JSX.Element => {
  const { component: Component } = props;
  return (
    <Layout
      renderToolbar={() => <Toolbar />}
      renderSidebar={() => <LinksList items={links} />}
      renderContent={() => <Component />}
    />
  );
};

const AdminRouting = (): JSX.Element => (
  <Router>
    <Route path="/signin" component={SignInScreen} />
    <Route path="/signup" component={SignUpScreen} />
    <RouteWithLayout path="/orders" layout={AdminLayout} component={AdminOrdersScreen} />
    <RouteWithLayout path="/products" layout={AdminLayout} component={AdminProductsScreen} />
    <RouteWithLayout path="/product" layout={AdminLayout} exact component={ProductCreateScreen} />
    <RouteWithLayout path="/product/:id" layout={AdminLayout} component={ProductEditScreen} />
  </Router>
);

export default AdminRouting;
