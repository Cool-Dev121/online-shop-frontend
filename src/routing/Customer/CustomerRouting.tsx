import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  SignInScreen,
  SignUpScreen,
  CustomerOrdersScreen,
  CustomerProductsScreen,
  CartScreen,
} from '../../screens';
import { RouteWithLayout, ProtectedRouteWithLayout } from '../Routes';
import { CustomerLayoutWrapper } from './CustomerLayoutWrapper';
import { PanelLayoutWrapper, CommonRoutes, FullscreenLayoutWrapper } from '../Common';
import { CustomerRoutes } from './CustomerRoutes';

interface Props {
  checkIsAllowed: () => boolean;
}

const CustomerRouting = (props: Props): JSX.Element => {
  const { checkIsAllowed } = props;
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
          checkIsAllowed={checkIsAllowed}
        />
        <ProtectedRouteWithLayout
          path={CustomerRoutes.Products}
          exact
          layout={CustomerLayoutWrapper}
          content={CustomerProductsScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={checkIsAllowed}
        />
        <ProtectedRouteWithLayout
          path={CustomerRoutes.Cart}
          exact
          layout={CustomerLayoutWrapper}
          content={CartScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={checkIsAllowed}
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

export default CustomerRouting;
