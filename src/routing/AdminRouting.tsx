import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { ProtectedRouteWithLayout } from './Routes/ProtectedRouteWithLayout';
import { PATH_IF_NOT_ALLOWED } from '../shared';
import { AppState } from '../store';

interface StateProps {
  isSignedIn: boolean;
}
type Props = StateProps;

const AdminRoutingInner = (props: Props): JSX.Element => {
  const { isSignedIn } = props;
  return (
    <Router>
      <RouteWithLayout path="/signin" layout={PanelLayoutWrapper} content={SignInScreen} />
      <RouteWithLayout path="/signup" layout={PanelLayoutWrapper} content={SignUpScreen} />
      <ProtectedRouteWithLayout
        path="/orders"
        layout={AdminLayoutWrapper}
        content={AdminOrdersScreen}
        pathIfNotAllowed={PATH_IF_NOT_ALLOWED}
        checkIsAllowed={() => isSignedIn}
      />
      <ProtectedRouteWithLayout
        path="/"
        exact
        layout={AdminLayoutWrapper}
        content={AdminProductsScreen}
        pathIfNotAllowed={PATH_IF_NOT_ALLOWED}
        checkIsAllowed={() => isSignedIn}
      />
      <RouteWithLayout
        path="/product"
        layout={AdminLayoutWrapper}
        exact
        content={ProductCreateScreen}
      />
      <RouteWithLayout
        path="/product/:id"
        layout={AdminLayoutWrapper}
        content={ProductEditScreen}
      />
    </Router>
  );
};

const mapStateToProps = (state: AppState) => {
  const { app } = state;
  return { isSignedIn: app.isSignedIn };
};

export const AdminRouting = connect(mapStateToProps)(AdminRoutingInner);

export default AdminRouting;
