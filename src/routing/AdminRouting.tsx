import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
} from '../screens';
import { LinksList, LinkItemModel, Toolbar } from '../shared';
import { Layout } from '../components';

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

const AdminRouting = (): JSX.Element => (
  <Router>
    <Layout
      renderToolbar={() => <Toolbar />}
      renderSidebar={() => <LinksList items={links} />}
      renderContent={() => (
        <React.Fragment>
          <Route path="/orders" component={AdminOrdersScreen} />
          <Route path="/products" component={AdminProductsScreen} />
          <Route path="/product" exact component={ProductCreateScreen} />
          <Route path="/product/:id" component={ProductEditScreen} />
        </React.Fragment>
      )}
    />
  </Router>
);

export default AdminRouting;
