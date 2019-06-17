import React, { Suspense } from 'react';
import { UserType, Loading } from '../shared';

const AdminRouting = React.lazy(() => import('./AdminRouting'));
const CustomerRouting = React.lazy(() => import('./CustomerRouting'));

const RoutingInner = (props: { type: UserType }): JSX.Element => {
  const { type } = props;
  switch (type) {
    case UserType.Admin:
      return <AdminRouting />;
    default:
    case UserType.Customer:
      return <CustomerRouting />;
  }
};

const getUserType = (): UserType => UserType.Admin;

export const Routing = (): JSX.Element => {
  const type = getUserType();
  return (
    <Suspense
      fallback={(
        <div>
          <Loading />
        </div>
)}
    >
      <RoutingInner type={type} />
    </Suspense>
  );
};
