import React from 'react';
import { styled } from '../themes';
import { shadowed } from '../shared';
import { ControlContainer } from '../ControlContainer';
import { Image } from '../Image';

const ImagePreviewContainer = styled.div`
  height: 100px;
  background-color: ${props => props.theme.imagePreview.bgColor};
  padding: ${props => props.theme.padding.sm}px;
  box-sizing: border-box;
  ${shadowed}
`;

interface Props {
  imagePath: string;
}

export const ImagePreview = (props: Props): JSX.Element => {
  const { imagePath } = props;
  return (
    <ControlContainer>
      <ImagePreviewContainer>
        <Image imagePath={imagePath} />
      </ImagePreviewContainer>
    </ControlContainer>
  );
};
