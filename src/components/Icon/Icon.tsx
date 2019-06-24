import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '../themes';
import { IconName } from './iconSet';

const MainContainer = styled.div`
  padding: ${props => props.theme.padding.sm}px;
`;

interface Props {
  name: IconName.IconDefinition;
  color: string;
}

export const Icon = (props: Props): JSX.Element => {
  const { name, color } = props;
  return (
    <MainContainer>
      <FontAwesomeIcon icon={name} color={color} size="lg" />
    </MainContainer>
  );
};
