import React from 'react';
import { connect } from 'react-redux';
import { FullscreenLoadingSign } from './FullscreenLoadingSign';
import { AppState } from '../../store';

interface StateProps {
  isLoadingShown: boolean;
}

type Props = StateProps;

const mapStateToProps = (state: AppState) => {
  const { app } = state;
  return { isLoadingShown: app.isLoadingShown };
};

const FullscreenLoadingSignContainerInner = (props: Props): JSX.Element => {
  const { isLoadingShown } = props;
  return <React.Fragment>{isLoadingShown && <FullscreenLoadingSign />}</React.Fragment>;
};

export const FullscreenLoadingSignContainer = connect(mapStateToProps)(
  FullscreenLoadingSignContainerInner,
);
