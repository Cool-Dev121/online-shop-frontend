import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { UserType, FullscreenLoadingSign } from '../shared';
import { RoutingByType } from './RoutingByType';
import { AppState, getUserType } from '../store';

// function checkIsAllowed(): boolean {
//   // 1. token should be presented
//   // 2. token should not be expired
//   return !!getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
// }

interface StateProps {
  isSignedIn: boolean;
  userType: UserType;
}
type Props = StateProps;

export const RoutingInner = (props: Props): JSX.Element => {
  const { isSignedIn, userType } = props;
  return (
    <Suspense fallback={<FullscreenLoadingSign />}>
      <RoutingByType type={userType} checkIsAllowed={() => isSignedIn} />
    </Suspense>
  );
};

const mapStateToProps = (state: AppState) => ({
  isSignedIn: !!state.app.userData,
  userType: getUserType(state),
});

export const Routing = connect(mapStateToProps)(RoutingInner);
