import React, {
  Fragment, useState, RefObject, useEffect,
} from 'react';
import { withTheme } from 'styled-components';
import { styled, Themable } from '../themes';
import { Input } from '../Input';
import { FormControl } from '../shared';
import { Icon, IconName } from '../Icon';
import { ImagePreview } from '../ImagePreview';

interface Props extends FormControl<File>, Themable {}

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const IconContainer = styled.div`
  padding: ${props => props.theme.padding.sm}px;
  display: flex;
  align-items: center;
`;

export const ImageUploader = withTheme(
  (props: Props): JSX.Element => {
    const {
      onChange, value, errorMessage, theme,
    } = props;

    const imageRef: RefObject<HTMLInputElement> = React.createRef();

    const [imagePath, setImagePath] = useState(value);
    const [localImageBuffer, setLocalImageBuffer] = useState();
    const [localImageName, setLocalImageName] = useState('');

    useEffect(() => {
      setImagePath(value);
    }, [value]);

    const onFilePicked = (e: any) => {
      const { files } = e.target;
      const file = files[0];
      if (file !== undefined) {
        const localImageNameInner = file.name;
        if (localImageNameInner.lastIndexOf('.') <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener('load', () => {
          setLocalImageName(localImageNameInner);
          setLocalImageBuffer(fr.result as ArrayBuffer);
          if (onChange) {
            onChange(file);
          }
        });
      }
    };

    return (
      <Fragment>
        <ImagePreview imagePath={localImageBuffer || imagePath} />
        <InputContainer
          onClick={() => {
            (imageRef.current as any).click();
          }}
        >
          <IconContainer>
            <Icon name={IconName.faPaperclip} color={theme.imageUploader.iconColor} />
          </IconContainer>
          <Input
            title="Select image"
            value={localImageName || imagePath}
            errorMessage={errorMessage}
          />
        </InputContainer>
        <input
          style={{ display: 'none' }}
          type="file"
          ref={imageRef}
          accept="image/*"
          onChange={onFilePicked}
        />
      </Fragment>
    );
  },
);
