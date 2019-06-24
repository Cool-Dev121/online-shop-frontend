import React, {
  Fragment, useState, RefObject, useEffect,
} from 'react';
import { Image } from '../Image';
import { styled } from '../themes';
import { Input } from '../Input';
import { shadowed, FormControl } from '../shared';

interface Props extends FormControl {}

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

  useEffect(() => {
    setImagePath(value);
  }, [value]);

  const onFilePicked = (e: any) => {
    const { files } = e.target;
    if (files[0] !== undefined) {
      const imgName = files[0].name;
      setImagePath(imgName);
      if (imgName.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener('load', () => {
        const productImageFile = files[0];
        const productImageUrl = fr.result;
        setImagePath(productImageUrl as string);
        if (onChange) {
          onChange(productImageFile as File);
        }
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
        <Input title="Select image" value={imagePath} errorMessage={errorMessage} />
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
