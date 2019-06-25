import React from 'react';
import { UserType } from '../shared';

const AdminRouting = React.lazy(() => import('./Admin/AdminRouting'));
const CustomerRouting = React.lazy(() => import('./Customer/CustomerRouting'));

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
