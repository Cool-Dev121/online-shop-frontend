import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
  SignInScreen,
  SignUpScreen,
  CustomerOrdersScreen,
  CustomerProductsScreen,
  CartScreen,
} from '../../screens';
import { RouteWithLayout, ProtectedRouteWithLayout } from '../Routes';
import { AppState } from '../../store';
import { CustomerLayoutWrapper } from './CustomerLayoutWrapper';
import { PanelLayoutWrapper, CommonRoutes, FullscreenLayoutWrapper } from '../Common';
import { CustomerRoutes } from './CustomerRoutes';

interface StateProps {
  isSignedIn: boolean;
}
type Props = StateProps;

const CustomerRoutingInner = (props: Props): JSX.Element => {
  const { isSignedIn } = props;
  return (
    <Router>
      <Switch>
        <RouteWithLayout
          path={CommonRoutes.SignIn}
          layout={PanelLayoutWrapper}
          content={SignInScreen}
        />
        <RouteWithLayout
          path={CommonRoutes.SignUp}
          layout={PanelLayoutWrapper}
          content={SignUpScreen}
        />
        <ProtectedRouteWithLayout
          path={CustomerRoutes.Orders}
          layout={CustomerLayoutWrapper}
          content={CustomerOrdersScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={() => isSignedIn}
        />
        <ProtectedRouteWithLayout
          path={CustomerRoutes.Products}
          exact
          layout={CustomerLayoutWrapper}
          content={CustomerProductsScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={() => isSignedIn}
        />
        <ProtectedRouteWithLayout
          path={CustomerRoutes.Cart}
          exact
          layout={CustomerLayoutWrapper}
          content={CartScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={() => isSignedIn}
        />
        <RouteWithLayout
          exact
          path="*"
          layout={FullscreenLayoutWrapper}
          content={() => <div>Page Not Found</div>}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: AppState) => {
  const { app } = state;
  return { isSignedIn: app.isSignedIn };
};

export const CustomerRouting = connect(mapStateToProps)(CustomerRoutingInner);

export default CustomerRouting;
