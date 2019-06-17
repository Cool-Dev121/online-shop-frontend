import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
} from '../screens';
import { LinksList, LinkItemModel } from '../shared';

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
    <LinksList items={links} />
    <div>
      <Route path="/orders" component={AdminOrdersScreen} />
      <Route path="/products" component={AdminProductsScreen} />
      <Route path="/product" exact component={ProductCreateScreen} />
      <Route path="/product/:id" component={ProductEditScreen} />
    </div>
  </Router>
);

export default AdminRouting;
