import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { CartScreen, CustomerOrdersScreen, CustomerProductsScreen } from '../screens';

const CustomerRouting = (): JSX.Element => (
  <Router>
    <div>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/">Products</Link>
    </div>
    <div>
      <Route path="/" exact component={CustomerProductsScreen} />
      <Route path="/cart" component={CartScreen} />
      <Route path="/orders" component={CustomerOrdersScreen} />
    </div>
  </Router>
);

export default CustomerRouting;
