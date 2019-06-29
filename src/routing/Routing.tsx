import React, { Suspense } from 'react';
import { UserType, FullscreenLoadingSign, LOCAL_STORAGE_KEY_TOKEN } from '../shared';
import { RoutingByType } from './RoutingByType';
import { getValueFromLocalStorage } from '../helpers';

function getUserType(): UserType {
  return UserType.Admin;
}

function checkIsAllowed(): boolean {
  return !!getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
}

export const Routing = (): JSX.Element => {
  const type = getUserType();
  return (
    <Suspense fallback={<FullscreenLoadingSign />}>
      <RoutingByType type={type} checkIsAllowed={checkIsAllowed} />
    </Suspense>
  );
};
