import React from 'react';
import { connect } from 'react-redux';
import { UserType } from '../shared';
import { AppState } from '../store';

const AdminRouting = React.lazy(() => import('./AdminRouting'));
const CustomerRouting = React.lazy(() => import('./CustomerRouting'));

export const RoutingByType = (props: { type: UserType }): JSX.Element => {
  const { type } = props;
  switch (type) {
    case UserType.Admin:
      return <AdminRouting />;
    default:
    case UserType.Customer:
      return <CustomerRouting />;
  }
};
