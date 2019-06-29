import React from 'react';
import { UserType } from '../shared';

const AdminRouting = React.lazy(() => import('./Admin/AdminRouting'));
const CustomerRouting = React.lazy(() => import('./Customer/CustomerRouting'));

export const RoutingByType = (props: {
type: UserType;
checkIsAllowed: () => boolean;
}): JSX.Element => {
  const { type, checkIsAllowed } = props;
  switch (type) {
    case UserType.Admin:
      return <AdminRouting checkIsAllowed={checkIsAllowed} />;
    default:
    case UserType.Customer:
      return <CustomerRouting />;
  }
};
