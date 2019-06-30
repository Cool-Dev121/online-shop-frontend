import React from 'react';
import { connect } from 'react-redux';
import { styled, Button } from '../../components';
import { AppDispatch, logOutActionCreator } from '../../store';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const ContentContainer = styled.div`
  flex: 1;
`;
const ControlsContainer = styled.div`
  flex: 0 0 80px;
`;

interface DispatchProps {
  logOut: () => void;
}
type Props = DispatchProps;

export const ToolbarInner = (props: Props): JSX.Element => {
  const { logOut } = props;
  return (
    <MainContainer>
      <ContentContainer>Toolbar</ContentContainer>
      <ControlsContainer>
        <Button
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </Button>
      </ControlsContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  logOut: () => {
    dispatch(logOutActionCreator());
  },
});

export const Toolbar = connect(
  null,
  mapDispatchToProps,
)(ToolbarInner);
