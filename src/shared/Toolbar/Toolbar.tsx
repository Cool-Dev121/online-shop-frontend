import React from 'react';
import { connect } from 'react-redux';
import {
  styled, Button, Text, TextSize,
} from '../../components';
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
      <ContentContainer>
        <Text text="Online Store" size={TextSize.xl} />
      </ContentContainer>
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
