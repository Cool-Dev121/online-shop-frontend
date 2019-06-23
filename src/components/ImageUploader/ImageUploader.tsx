import React, { Fragment, useState, RefObject } from 'react';
import { Image } from '../Image';
import { styled } from '../themes';
import { Input } from '../Input';
import { shadowed } from '../shared';

interface Props {
  value: string;
  onChange: (file: any, url: string | ArrayBuffer | null) => void;
  errorMessage?: string;
}

const ImagePreviewContainer = styled.div`
  height: 100px;
  background-color: ${props => props.theme.imageUploader.bgColor};
  padding: ${props => props.theme.padding.sm}px;
  box-sizing: border-box;
  ${shadowed}
`;

export const ImageUploader = (props: Props): JSX.Element => {
  const { onChange, value, errorMessage } = props;

  const imageRef: RefObject<HTMLInputElement> = React.createRef();

  const [imagePath, setImagePath] = useState(value);
  const [imageName, setImageName] = useState();

  const onFilePicked = (e: any) => {
    const { files } = e.target;
    if (files[0] !== undefined) {
      const imgName = files[0].name;
      setImageName(imgName);
      if (imgName.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener('load', () => {
        const productImageFile = files[0];
        const productImageUrl = fr.result;
        setImagePath(productImageUrl as string);
        onChange(productImageFile, productImageUrl);
      });
    }
  };

  return (
    <Fragment>
      <ImagePreviewContainer>
        <Image imagePath={imagePath} />
      </ImagePreviewContainer>
      <div
        onClick={() => {
          (imageRef.current as any).click();
        }}
      >
        <Input title="Select image" value={imageName} errorMessage={errorMessage} />
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={imageRef}
        accept="image/*"
        onChange={onFilePicked}
      />
    </Fragment>
  );
};
