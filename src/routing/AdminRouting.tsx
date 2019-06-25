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
import { AdminLayoutWrapper, PanelLayoutWrapper } from './SpecificLayouts';
import { RouteWithLayout } from './Routes';

const AdminRouting = (): JSX.Element => (
  <Router>
    <RouteWithLayout path="/signin" layout={PanelLayoutWrapper} content={SignInScreen} />
    <RouteWithLayout path="/signup" layout={PanelLayoutWrapper} content={SignUpScreen} />
    <RouteWithLayout path="/orders" layout={AdminLayoutWrapper} content={AdminOrdersScreen} />
    <RouteWithLayout path="/products" layout={AdminLayoutWrapper} content={AdminProductsScreen} />
    <RouteWithLayout
      path="/product"
      layout={AdminLayoutWrapper}
      exact
      content={ProductCreateScreen}
    />
    <RouteWithLayout path="/product/:id" layout={AdminLayoutWrapper} content={ProductEditScreen} />
  </Router>
);

export default AdminRouting;
