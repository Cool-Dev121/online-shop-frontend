import React, { Suspense } from 'react';
import { UserType, FullscreenLoadingSign } from '../shared';
import { RoutingByType } from './RoutingByType';

const getUserType = (): UserType => UserType.Admin;

export const Routing = (): JSX.Element => {
  const type = getUserType();
  return (
    <Suspense fallback={<FullscreenLoadingSign />}>
      <RoutingByType type={type} />
    </Suspense>
  );
};
