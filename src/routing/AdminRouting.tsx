import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
} from '../screens';

const AdminRouting = (): JSX.Element => (
  <Router>
    <div>
      <Link to="/orders">Orders</Link>
      <Link to="/products">Products</Link>
      <Link to="/product">Create</Link>
      <Link to="/product/5">Edit</Link>
    </div>
    <div>
      <Route path="/orders" component={AdminOrdersScreen} />
      <Route path="/products" component={AdminProductsScreen} />
      <Route path="/product" exact component={ProductCreateScreen} />
      <Route path="/product/:id" component={ProductEditScreen} />
    </div>
  </Router>
);

export { AdminRouting };
