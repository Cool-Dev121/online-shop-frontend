import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import { RouteWithLayout, FullscreenLayoutWrapper, AdminLayoutWrapper } from './SpecificLayouts';

const AdminRouting = (): JSX.Element => (
  <Router>
    <RouteWithLayout path="/signin" layout={FullscreenLayoutWrapper} component={SignInScreen} />
    <RouteWithLayout path="/signup" layout={FullscreenLayoutWrapper} component={SignUpScreen} />
    <RouteWithLayout path="/orders" layout={AdminLayoutWrapper} component={AdminOrdersScreen} />
    <RouteWithLayout path="/products" layout={AdminLayoutWrapper} component={AdminProductsScreen} />
    <RouteWithLayout
      path="/product"
      layout={AdminLayoutWrapper}
      exact
      component={ProductCreateScreen}
    />
    <RouteWithLayout
      path="/product/:id"
      layout={AdminLayoutWrapper}
      component={ProductEditScreen}
    />
  </Router>
);

export default AdminRouting;
