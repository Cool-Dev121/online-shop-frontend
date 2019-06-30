import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { UserType, FullscreenLoadingSign } from '../shared';
import { RoutingByType } from './RoutingByType';
import { AppState } from '../store';

function getUserType(): UserType {
  return UserType.Admin;
}

// function checkIsAllowed(): boolean {
//   // 1. token should be presented
//   // 2. token should not be expired
//   return !!getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
// }

interface StateProps {
  isSignedIn: boolean;
}
type Props = StateProps;

export const RoutingInner = (props: Props): JSX.Element => {
  const { isSignedIn } = props;
  const type = getUserType();
  return (
    <Suspense fallback={<FullscreenLoadingSign />}>
      <RoutingByType type={type} checkIsAllowed={() => isSignedIn} />
    </Suspense>
  );
};

const mapStateToProps = (state: AppState) => ({ isSignedIn: state.app.isSignedIn });

export const Routing = connect(mapStateToProps)(RoutingInner);
