import * as React from 'react';
import { UserType } from '../shared';
import { AdminRouting } from './AdminRouting';
import { CustomerRouting } from './CustomerRouting';

const getUserType = (): UserType => UserType.Admin;

export const Routing = (): JSX.Element => {
  const type = getUserType();
  switch (type) {
    case UserType.Admin:
      return <AdminRouting />;
    default:
    case UserType.Customer:
      return <CustomerRouting />;
  }
};
