import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  AdminOrdersScreen,
  AdminProductsScreen,
  ProductCreateScreen,
  ProductEditScreen,
  SignInScreen,
  SignUpScreen,
} from '../../screens';
import { RouteWithLayout, ProtectedRouteWithLayout } from '../Routes';
import { AdminLayoutWrapper } from './AdminLayoutWrapper';
import { PanelLayoutWrapper, CommonRoutes, FullscreenLayoutWrapper } from '../Common';
import { AdminRoutes } from './AdminRoutes';

interface Props {
  checkIsAllowed: () => boolean;
}

const AdminRouting = (props: Props): JSX.Element => {
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
          path={AdminRoutes.Orders}
          layout={AdminLayoutWrapper}
          content={AdminOrdersScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={checkIsAllowed}
        />
        <ProtectedRouteWithLayout
          path={AdminRoutes.Product}
          layout={AdminLayoutWrapper}
          content={ProductCreateScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={checkIsAllowed}
        />
        <ProtectedRouteWithLayout
          path={`${AdminRoutes.Product}/:id`}
          layout={AdminLayoutWrapper}
          content={ProductEditScreen}
          pathIfNotAllowed={CommonRoutes.SignIn}
          checkIsAllowed={checkIsAllowed}
        />
        <ProtectedRouteWithLayout
          path={AdminRoutes.Products}
          layout={AdminLayoutWrapper}
          content={AdminProductsScreen}
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

export default AdminRouting;
